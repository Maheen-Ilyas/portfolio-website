import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

const OrbCanvas = () => {
  const [shapeSize, setShapeSize] = useState(1);
  const [positions, setPositions] = useState({
    box1: [-3, 1.4, 1],
    box2: [5, 0, 0.4],
    box3: [-3, -1.6, 0],
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setShapeSize(0.6);
        setPositions({
          box1: [-1, 0.8, 0.5],
          box2: [1, 0, 0.2],
          box3: [-1, -0.8, 0],
        });
      } else {
        setShapeSize(1);
        setPositions({
          box1: [-3, 1.4, 1],
          box2: [5, 0, 0.4],
          box3: [-3, -1.6, 0],
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
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.7} />
      <OrbitControls enableZoom={false} />
      <Box position={positions.box1} scale={[shapeSize, shapeSize, shapeSize]}>
        <meshStandardMaterial color="#444A5B" />
      </Box>
      <Box
        position={positions.box2}
        scale={[shapeSize, shapeSize, shapeSize]}
      >
        <meshStandardMaterial color="#444A5B" />
      </Box>
      <Box position={positions.box3} scale={[shapeSize, shapeSize, shapeSize]}>
        <meshStandardMaterial color="#444A5B" />
      </Box>
    </Canvas>
  );
};

export default OrbCanvas;
