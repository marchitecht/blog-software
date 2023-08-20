// @ts-nocheck
import * as THREE from 'three'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import vertex from './glsl/shader.vert'
import fragment from './glsl/shader.frag'
import { forwardRef, useImperativeHandle, useRef } from 'react'
// 
const ShaderImpl = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color('red'),
  },
  vertex,
  fragment,
)

extend({ ShaderImpl })

// eslint-disable-next-line react/display-name
export const Shader = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()

  useImperativeHandle(ref, () => localRef.current)

  useFrame((_, delta) => (localRef.current.time += delta))
  console.log(localRef.current.time, '====')

  return <shaderImpl ref={localRef} glsl={THREE.GLSL3} {...props} attach='material' />
})

export default Shader
