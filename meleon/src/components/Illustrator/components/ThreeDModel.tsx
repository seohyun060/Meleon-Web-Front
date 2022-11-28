import React, { useEffect, useRef } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/fiber';
import { images } from 'src/assets/images';
import THREE from 'three';

type Props = {
  isEven: boolean;
};

const ThreeDModel = ({ isEven }: Props) => {
  const fbx = useLoader(FBXLoader, images['3d'].car);
  const obj = useLoader(OBJLoader, images['3d'].studio);

  if (isEven) {
    return (
      <primitive
        object={fbx}
        rotation={[Math.PI / 2, Math.PI, 0]}
        scale={0.05}
        position={[Math.sqrt(10), -2, -8]}
        receiveShadow
        castShadow
      />
    );
  } else {
    return <primitive object={obj} scale={0.003} position={[-10, -2, -8]} />;
  }
};

export default ThreeDModel;
