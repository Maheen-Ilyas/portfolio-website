import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box, Sphere, Cone } from "@react-three/drei";

const OrbCanvas = () => {
  const [shapeSize, setShapeSize] = useState(1);
  const [positions, setPositions] = useState({
    box: [-3, 1.4, 1],
    sphere: [5, 0, 0.4],
    cone: [-3, -1.6, 0],
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setShapeSize(0.6);
        setPositions({
          box: [-1, 0.8, 0.5],
          sphere: [1, 0, 0.2],
          cone: [-1, -0.8, 0],
        });
      } else {
        setShapeSize(1);
        setPositions({
          box: [-3, 1.4, 1],
          sphere: [5, 0, 0.4],
          cone: [-3, -1.6, 0],
        });
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <OrbitControls enableZoom={false} />
      <Box position={positions.box} scale={[shapeSize, shapeSize, shapeSize]}>
        <meshStandardMaterial color="#3c444C" />
      </Box>
      <Sphere
        position={positions.sphere}
        scale={[shapeSize, shapeSize, shapeSize]}
      >
        <meshStandardMaterial color="#3c444C" />
      </Sphere>
      <Cone position={positions.cone} scale={[shapeSize, shapeSize, shapeSize]}>
        <meshStandardMaterial color="#3c444C" />
      </Cone>
    </Canvas>
  );
};

export default OrbCanvas;
