import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { gsap } from 'gsap';
import type { ThreeEvent } from '@react-three/fiber';
import type * as THREE from 'three';
import { useI18n } from '../../i18n/I18nContext';
import type { Character, SceneObject } from '../../types';

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
//   1. Add a SceneObject entry to characters.ts (position, color, size, tooltipKey)
//   2. Add the tooltipKey → text entry to sceneTooltips in all translation files
//
// The component handles animation, click detection, and auto-dismissing tooltip.

interface InteractiveObjectProps {
  sceneObject: SceneObject;
  tooltip: string;
}

function InteractiveObject({ sceneObject, tooltip }: InteractiveObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [active, setActive] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.015;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
  });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(true);
    timerRef.current = setTimeout(() => setActive(false), 2000);
  };

  const tooltipOffsetY = sceneObject.size[1] / 2 + 0.5;

  return (
    <mesh ref={meshRef} position={sceneObject.position} onClick={handleClick}>
      <boxGeometry args={sceneObject.size} />
      <meshStandardMaterial
        color={sceneObject.color}
        roughness={0.2}
        metalness={0.6}
        emissive={sceneObject.color}
        emissiveIntensity={active ? 0.5 : 0.08}
      />
      {active && (
        <Html
          center
          position={[0, tooltipOffsetY, 0]}
          style={{ pointerEvents: 'none' }}
          zIndexRange={[10, 0]}
        >
          <div className="scene-tooltip">{tooltip}</div>
        </Html>
      )}
    </mesh>
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

  const titleRef    = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  // Animate title and subtitle whenever the character changes (and on initial mount)
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)', transformOrigin: 'center' },
      );
    }
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, delay: 0.1, ease: 'back.out(1.7)', transformOrigin: 'center' },
      );
    }
  }, [character.id]);

  return (
    <div className="char-scene">
      {/*
       * Canvas sizing note: do NOT override canvas dimensions with CSS.
       * r3f uses a ResizeObserver on this container and sets explicit pixel
       * dimensions on the <canvas> element. Overriding with CSS causes the
       * drawing buffer and display size to diverge (especially when DevTools
       * changes the viewport), which makes the canvas appear distorted.
       * We pass dpr={[1,2]} to clamp DPR and avoid pixel-ratio jumps.
       */}
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 8, 5]} intensity={1.2} />
        <pointLight position={[-5, -4, -3]} intensity={0.6} color="#8888ff" />

        <CharacterMesh color={character.color} />

        {character.sceneObjects.map((obj) => (
          <InteractiveObject
            key={obj.id}
            sceneObject={obj}
            tooltip={t.sceneTooltips[obj.tooltipKey] ?? obj.tooltipKey}
          />
        ))}
      </Canvas>

      {/* HTML overlays — pointer-events enabled so text is selectable */}
      <div ref={titleRef} className="scene-overlay scene-overlay--title">{title}</div>
      <div ref={subtitleRef} className="scene-overlay scene-overlay--subtitle">{subtitle}</div>
      <div className="scene-overlay scene-overlay--level">{level}</div>
    </div>
  );
}
