import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Grid } from '@react-three/drei';
import type { ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import { useI18n } from '../../i18n/I18nContext';
import type { Character, SceneObject } from '../../types';

// ── Scene background colour ────────────────────────────────────────────────

function SceneSetup() {
  const { scene } = useThree();
  useEffect(() => {
    scene.background = new THREE.Color('#1a2620');
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

// ── Main character mesh (bobs, no individual rotation) ────────────────────

function CharacterMesh({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.18;
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.6, 1.6, 1.6]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.4} />
    </mesh>
  );
}

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

// ── Slowly rotating group — wraps all scene objects ───────────────────────
// Speed is 0.0015/frame ≈ 20% of the original 0.008, i.e. ~80% slower.

function RotatingGroup({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.0015;
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

  // Close info panel when switching characters
  useEffect(() => { setActiveObjectId(null); }, [character.id]);

  const activeObject  = character.sceneObjects.find((o) => o.id === activeObjectId) ?? null;
  const activeTooltip = activeObject
    ? (t.sceneTooltips[activeObject.tooltipKey] ?? activeObject.tooltipKey)
    : '';

  return (
    <div className="char-scene">
      {/*
       * Canvas sizing: do NOT override canvas CSS dimensions.
       * r3f manages them via ResizeObserver; overriding causes buffer/display
       * size divergence on layout reflows (e.g. DevTools open).
       */}
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <SceneSetup />
        <CameraController />

        <ambientLight intensity={0.5} />
        <pointLight position={[5, 8, 5]} intensity={1.2} />
        <pointLight position={[-5, -4, -3]} intensity={0.6} color="#4466aa" />

        <Grid
          position={[1.2, -1.2, 0]}
          infiniteGrid
          cellSize={0.5}
          cellThickness={0.4}
          cellColor="#243830"
          sectionSize={2.5}
          sectionThickness={0.8}
          sectionColor="#3a5a4a"
          fadeDistance={18}
          fadeStrength={1.2}
        />

        <RotatingGroup>
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
    </div>
  );
}
