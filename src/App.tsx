import { Canvas } from "@react-three/fiber";
import React from "react";
import "./App.css";

import Box from "./components/Box";

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas>
          <Box position={[-1.6, 0, 0]} />
          <Box position={[1.6, 0, 0]} />

          {/*周囲光*/}
          <ambientLight intensity={0.5} />

          {/*スポットライト（懐中電灯）*/}
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

          <pointLight position={[-10, -10, -10]} />
        </Canvas>
      </div>
      <h1>Theejs Fiber</h1>
      <a
        href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
        target="_blank"
        rel="noreferrer"
      >
        もっと見る
      </a>
    </>
  );
}

export default App;
