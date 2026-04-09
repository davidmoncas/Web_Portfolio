import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {  useGLTF, useAnimations } from '@react-three/drei';
import type { ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import { useI18n } from '../../i18n/I18nContext';
import { PlayerProfile } from './PlayerProfile';
import type { Character, SceneObject } from '../../types';

const MODEL_URL = new URL('../../3d/sad_idle.glb', import.meta.url).href;

// ── Scene background colour ────────────────────────────────────────────────

function SceneSetup() {
  const { scene } = useThree();
  useEffect(() => {
    scene.background = new THREE.Color('#f2f4f5');
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

// ── Main character mesh — GLB model ───────────────────────────────────────

function CharacterMesh(_props: { color: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(MODEL_URL);
  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    const first = Object.values(actions)[0];
    if (first) first.play();
  }, [actions]);

  return <primitive ref={groupRef} object={scene} />;
}

useGLTF.preload(MODEL_URL);

// ── Interactive scene object (no individual rotation) ─────────────────────
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
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onActivate(sceneObject.id);
  };
  return (
    <mesh position={sceneObject.position} onClick={handleClick}>
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

// ── Drag-to-rotate sensitivity ─────────────────────────────────────────────
const H_SENSITIVITY = 0.005; // radians per pixel — horizontal (Y-axis)
const V_SENSITIVITY = 0.003; // radians per pixel — vertical (X-axis)
const V_CLAMP       = Math.PI / 3; // max vertical tilt (60°)

// ── Rotating group — driven by external rotation ref ──────────────────────

interface RotatingGroupProps {
  children: React.ReactNode;
  rotationRef: React.RefObject<{ x: number; y: number }>;
}

function RotatingGroup({ children, rotationRef }: RotatingGroupProps) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = rotationRef.current!.y;
    groupRef.current.rotation.x = rotationRef.current!.x;
  });
  return <group ref={groupRef}>{children}</group>;
}

// ── Scene info panel (HTML overlay, top-right) ─────────────────────────────

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
  const [activeObjectId, setActiveObjectId] = useState<string | null>(null);

  // Accumulated rotation driven by drag
  const rotationRef = useRef({ x: 0, y: 0 });
  const dragRef     = useRef({ active: false, lastX: 0, lastY: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    dragRef.current = { active: true, lastX: e.clientX, lastY: e.clientY };
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.lastX;
    const dy = e.clientY - dragRef.current.lastY;
    rotationRef.current.y += dx * H_SENSITIVITY;
    rotationRef.current.x = Math.max(
      -V_CLAMP,
      Math.min(V_CLAMP, rotationRef.current.x + dy * V_SENSITIVITY),
    );
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastY = e.clientY;
  };
  const stopDrag = () => { dragRef.current.active = false; };

  // Close info panel when switching characters
  useEffect(() => { setActiveObjectId(null); }, [character.id]);

  const activeObject  = character.sceneObjects.find((o) => o.id === activeObjectId) ?? null;
  const activeTooltip = activeObject
    ? (t.sceneTooltips[activeObject.tooltipKey] ?? activeObject.tooltipKey)
    : '';

  return (
    <div
      className="char-scene"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      style={{ cursor: 'grab' }}
    >
      {/*
       * Canvas sizing: do NOT override canvas CSS dimensions.
       * r3f manages them via ResizeObserver; overriding causes buffer/display
       * size divergence on layout reflows (e.g. DevTools open).
       */}
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0.5, 2.5], fov: 60  , rotation:[8 * 3.1416/180,0,0]}}>
        <SceneSetup />
        <CameraController />

        <ambientLight intensity={0.5} />
        <pointLight position={[5, 8, 5]} intensity={1.2} />
        <pointLight position={[-5, -4, -3]} intensity={0.6} color="#4466aa" />


        <RotatingGroup rotationRef={rotationRef}>
          <CharacterMesh color={character.color} />
          {character.sceneObjects.map((obj) => (
            <InteractiveObject
              key={obj.id}
              sceneObject={obj}
              isActive={activeObjectId === obj.id}
              onActivate={setActiveObjectId}
            />
          ))}
        </RotatingGroup>
      </Canvas>

      {activeObject && (
        <SceneInfoPanel
          sceneObject={activeObject}
          tooltipText={activeTooltip}
          onClose={() => setActiveObjectId(null)}
        />
      )}

      <PlayerProfile />
    </div>
  );
}
