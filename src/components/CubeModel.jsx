import { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Cube = ({ gltfPath, rotation, scale }) => {
  const { scene } = useGLTF(gltfPath);
  const memoizedScene = useMemo(() => scene.clone(), [scene]); // Clone the scene to avoid unintended modifications

  return <primitive object={memoizedScene} scale={scale} rotation={rotation} />;
};

const CubeModel = ({ gltfPath, rotation, scale }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={5} />
      <Suspense fallback={null}>
        <Cube gltfPath={gltfPath} rotation={rotation} scale={scale} />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>

  );
};

export default CubeModel;
