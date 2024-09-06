import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Preload,
  useAnimations,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Orb = ({ isMobile }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("./cyber_orb/scene.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => action.play());
    }
  }, [actions]);

  return (
    <group ref={group}>
      <hemisphereLight intensity={0.8} groundColor="black" />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight intensity={2} decay={2} distance={50} position={[5, 5, 5]} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={scene}
        scale={isMobile ? 0.8 : 1.8}
        position={isMobile ? [0, 0, 0] : [0, -3.74, 0]}
      />
    </group>
  );
};

const OrbCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Orb isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default OrbCanvas;
