import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Grid } from '@react-three/drei';
import { gsap } from 'gsap';
import type { ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import { useI18n } from '../../i18n/I18nContext';
import type { Character, SceneObject } from '../../types';

// ── Scene setup — background colour ───────────────────────────────────────

function SceneSetup() {
  const { scene } = useThree();
  useEffect(() => {
    scene.background = new THREE.Color('#0C1E34');
  }, [scene]);
  return null;
}

// ── Camera controller — adjusts FOV on resize to keep both cubes in view ──

function CameraController() {
  const { camera, size } = useThree();
  useEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return;
    const aspect = size.width / size.height;
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
// To add a new interactive object:
//   1. Add a SceneObject to characters.ts (position, color, size, tooltipKey)
//   2. Add the tooltipKey text to sceneTooltips in all translation files
//   3. Optionally add imageUrl for an image in the info panel

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

// ── Scene info panel ───────────────────────────────────────────────────────

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
        <button className="scene-info-panel__close" onClick={onClose} aria-label="Close">
          ×
        </button>
      </div>
      <div className="scene-info-panel__body">
        <p className="scene-info-panel__text">{tooltipText}</p>
        {sceneObject.imageUrl && (
          <img src={sceneObject.imageUrl} alt="" className="scene-info-panel__image" />
        )}
      </div>
    </div>
  );
}

// ── Scene export ───────────────────────────────────────────────────────────

export function CharacterScene({ character }: { character: Character }) {
  const { t } = useI18n();

  const title    = t.characters[character.id].name;
  const subtitle = t.characters[character.id].subtitle;
  const level    = t.scene.level;

  const titleBadgeRef    = useRef<HTMLDivElement>(null);
  const subtitleBadgeRef = useRef<HTMLDivElement>(null);

  const [activeObjectId, setActiveObjectId] = useState<string | null>(null);

  useEffect(() => { setActiveObjectId(null); }, [character.id]);

  useEffect(() => {
    if (titleBadgeRef.current) {
      gsap.fromTo(titleBadgeRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)', transformOrigin: 'center' },
      );
    }
    if (subtitleBadgeRef.current) {
      gsap.fromTo(subtitleBadgeRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, delay: 0.1, ease: 'back.out(1.7)', transformOrigin: 'center' },
      );
    }
  }, [character.id]);

  const activeObject  = character.sceneObjects.find((o) => o.id === activeObjectId) ?? null;
  const activeTooltip = activeObject
    ? (t.sceneTooltips[activeObject.tooltipKey] ?? activeObject.tooltipKey)
    : '';

  return (
    <div className="char-scene">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <SceneSetup />
        <CameraController />

        <ambientLight intensity={0.5} />
        <pointLight position={[5, 8, 5]} intensity={1.2} />
        <pointLight position={[-5, -4, -3]} intensity={0.6} color="#4466aa" />

        {/* 3D grid floor */}
        <Grid
          position={[1.2, -1.2, 0]}
          infiniteGrid
          cellSize={0.5}
          cellThickness={0.4}
          cellColor="#1E3E60"
          sectionSize={2.5}
          sectionThickness={0.8}
          sectionColor="#2A5888"
          fadeDistance={18}
          fadeStrength={1.2}
        />

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

      <div className="scene-overlay scene-overlay--title">
        <div
          ref={titleBadgeRef}
          className="scene-overlay__badge scene-overlay__badge--title"
          style={{ color: character.color }}
        >
          {title}
        </div>
      </div>

      <div className="scene-overlay scene-overlay--subtitle">
        <div ref={subtitleBadgeRef} className="scene-overlay__badge scene-overlay__badge--subtitle">
          {subtitle}
        </div>
      </div>

      <div className="scene-overlay scene-overlay--level">
        <div className="scene-overlay__badge scene-overlay__badge--level">{level}</div>
      </div>

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
