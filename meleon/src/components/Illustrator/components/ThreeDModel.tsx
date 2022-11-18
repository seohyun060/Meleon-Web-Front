import React, { useEffect, useRef } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useLoader } from '@react-three/fiber';
import { images } from 'src/assets/images';
import THREE from 'three';

type Props = {};

const ThreeDModel = () => {
  const fbx = useLoader(FBXLoader, images['3d'].car);

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
};

export default ThreeDModel;
