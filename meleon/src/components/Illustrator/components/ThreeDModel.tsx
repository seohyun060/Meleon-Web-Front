import React, { useEffect, useRef } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/fiber';
import { images } from 'src/assets/images';
import THREE from 'three';

type Props = {};

const ThreeDModel = () => {
  const fbx = useLoader(FBXLoader, images['3d'].car);
  const obj = useLoader(OBJLoader, images['3d'].studio);

  return (
    <primitive
      object={obj}
      scale={0.003}
      position={[-10, -2, -8]}
      receiveShadow
      castShadow
    />
  );
};

export default ThreeDModel;
