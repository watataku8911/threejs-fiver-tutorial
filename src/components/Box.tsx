import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Mesh } from "three";

const Box = (props: JSX.IntrinsicElements["mesh"]) => {
  const ref = useRef({} as Mesh);
  const [clicked, setClicked] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  useFrame(() => (ref.current.rotation.x += 0.01));

  return (
    <mesh
      ref={ref}
      {...props}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={clicked ? 2 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};
export default Box;
