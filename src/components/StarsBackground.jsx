import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function StarsBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Stars
          radius={100}
          depth={50}
          count={7000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
}

export default StarsBackground;