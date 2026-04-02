import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { gsap } from 'gsap';
import type { ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import { useI18n } from '../../i18n/I18nContext';
import type { Character, SceneObject } from '../../types';

// ── Camera controller — adjusts FOV on resize to keep both cubes in view ──

function CameraController() {
  const { camera, size } = useThree();

  useEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return;
    const aspect = size.width / size.height;
    // The rightmost point that must stay visible is the far edge of the small
    // cube at x ≈ 2.7 + 0.2 padding = 2.9, camera at z = 4.5.
    // required vFOV = 2 * atan(rightExtent / (cameraZ * aspect))
    const requiredFov = (2 * Math.atan(2.9 / (4.5 * aspect)) * 180) / Math.PI;
    camera.fov = Math.max(50, requiredFov);
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}

// ── Main character mesh ────────────────────────────────────────────────────

function CharacterMesh({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.008;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.18;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.6, 1.6, 1.6]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.4} />
    </mesh>
  );
}

// ── Interactive scene object ───────────────────────────────────────────────
//
// To add a new interactive object to a character's scene:
//   1. Add a SceneObject entry in characters.ts (position, color, size, tooltipKey)
//   2. Add the tooltipKey → text in sceneTooltips in all translation files
//   3. Optionally add imageUrl to the SceneObject for an image in the panel

interface InteractiveObjectProps {
  sceneObject: SceneObject;
  isActive: boolean;
  onActivate: (id: string) => void;
}

function InteractiveObject({ sceneObject, isActive, onActivate }: InteractiveObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.015;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
  });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onActivate(sceneObject.id);
  };

  return (
    <mesh ref={meshRef} position={sceneObject.position} onClick={handleClick}>
      <boxGeometry args={sceneObject.size} />
      <meshStandardMaterial
        color={sceneObject.color}
        roughness={0.2}
        metalness={0.6}
        emissive={sceneObject.color}
        emissiveIntensity={isActive ? 0.6 : 0.08}
      />
    </mesh>
  );
}

// ── Scene info panel (HTML overlay, top-right corner) ─────────────────────

interface SceneInfoPanelProps {
  sceneObject: SceneObject;
  tooltipText: string;
  onClose: () => void;
}

function SceneInfoPanel({ sceneObject, tooltipText, onClose }: SceneInfoPanelProps) {
  return (
    <div className="scene-info-panel">
      <div className="scene-info-panel__header">
        <span className="scene-info-panel__title">
          {sceneObject.id.replace(/_/g, ' ')}
        </span>
        <button
          className="scene-info-panel__close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
      </div>
      <div className="scene-info-panel__body">
        <p className="scene-info-panel__text">{tooltipText}</p>
        {sceneObject.imageUrl && (
          <img
            src={sceneObject.imageUrl}
            alt=""
            className="scene-info-panel__image"
          />
        )}
      </div>
    </div>
  );
}

// ── Scene export ───────────────────────────────────────────────────────────

interface CharacterSceneProps {
  character: Character;
}

export function CharacterScene({ character }: CharacterSceneProps) {
  const { t } = useI18n();

  const title    = t.characters[character.id].name;
  const subtitle = t.characters[character.id].subtitle;
  const level    = t.scene.level;

  // GSAP refs — animate the badge elements (not the outer positioning divs)
  const titleBadgeRef    = useRef<HTMLDivElement>(null);
  const subtitleBadgeRef = useRef<HTMLDivElement>(null);

  // Info panel state — null means closed
  const [activeObjectId, setActiveObjectId] = useState<string | null>(null);

  // Close the info panel when switching characters
  useEffect(() => {
    setActiveObjectId(null);
  }, [character.id]);

  // Animate badges on character change (and initial mount)
  useEffect(() => {
    if (titleBadgeRef.current) {
      gsap.fromTo(
        titleBadgeRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)', transformOrigin: 'center' },
      );
    }
    if (subtitleBadgeRef.current) {
      gsap.fromTo(
        subtitleBadgeRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, delay: 0.1, ease: 'back.out(1.7)', transformOrigin: 'center' },
      );
    }
  }, [character.id]);

  const activeObject = character.sceneObjects.find((o) => o.id === activeObjectId) ?? null;
  const activeTooltip = activeObject
    ? (t.sceneTooltips[activeObject.tooltipKey] ?? activeObject.tooltipKey)
    : '';

  return (
    <div className="char-scene">
      {/*
       * Canvas sizing note: do NOT override canvas dimensions with CSS.
       * r3f manages those via ResizeObserver. Overriding causes drawing-buffer
       * vs. display-size divergence on layout reflows (e.g. DevTools open).
       * dpr={[1,2]} clamps device pixel ratio to prevent DPR-related jumps.
       */}
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <CameraController />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 8, 5]} intensity={1.2} />
        <pointLight position={[-5, -4, -3]} intensity={0.6} color="#8888ff" />

        <CharacterMesh color={character.color} />

        {character.sceneObjects.map((obj) => (
          <InteractiveObject
            key={obj.id}
            sceneObject={obj}
            isActive={activeObjectId === obj.id}
            onActivate={setActiveObjectId}
          />
        ))}
      </Canvas>

      {/* Title badge — color matches character */}
      <div className="scene-overlay scene-overlay--title">
        <div
          ref={titleBadgeRef}
          className="scene-overlay__badge scene-overlay__badge--title"
          style={{ color: character.color }}
        >
          {title}
        </div>
      </div>

      {/* Subtitle badge */}
      <div className="scene-overlay scene-overlay--subtitle">
        <div ref={subtitleBadgeRef} className="scene-overlay__badge scene-overlay__badge--subtitle">
          {subtitle}
        </div>
      </div>

      {/* Level badge — static, no animation */}
      <div className="scene-overlay scene-overlay--level">
        <div className="scene-overlay__badge scene-overlay__badge--level">{level}</div>
      </div>

      {/* Scene info panel — shown on interactive object click */}
      {activeObject && (
        <SceneInfoPanel
          sceneObject={activeObject}
          tooltipText={activeTooltip}
          onClose={() => setActiveObjectId(null)}
        />
      )}
    </div>
  );
}
