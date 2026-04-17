import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import type { Group } from 'three';

function Model({ url, isSelected }: { url: string; isSelected: boolean }) {
  const { scene } = useGLTF(url);
  const ref = useRef<Group>(null);

  useFrame((_, delta) => {
    if (ref.current && isSelected) {
      ref.current.rotation.y += delta * 1.2;
    }
  });

  return <primitive ref={ref} object={scene} />;
}

interface Props {
  url: string;
  isSelected: boolean;
}

export function SlotScene3D({ url, isSelected }: Props) {
  return (
    <div className="inv-slot__scene3d">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 2], fov: 45 }}
          style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Model url={url} isSelected={isSelected} />
        </Canvas>
      </Suspense>
    </div>
  );
}
