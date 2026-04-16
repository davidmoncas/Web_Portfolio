import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

interface Props {
  url: string;
}

export function SlotScene3D({ url }: Props) {
  return (
    <div className="inv-slot__scene3d">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 2], fov: 45 }}
          style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Model url={url} />
        </Canvas>
      </Suspense>
    </div>
  );
}
