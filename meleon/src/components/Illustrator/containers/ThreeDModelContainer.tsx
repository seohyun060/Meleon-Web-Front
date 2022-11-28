import React, { useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import ThreeDModel from '../components/ThreeDModel';

type Props = {
  index?: number;
};

const ThreeDModelContainer = ({ index = 0 }: Props) => {
  const isEven = useMemo(() => index % 2 === 0, [index]);
  return <ThreeDModel isEven={isEven} />;
};

export default ThreeDModelContainer;
