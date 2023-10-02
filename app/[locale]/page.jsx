'use client'
// import * as THREE from 'three'

import ProjectPreview from '@/components/dom/ProjectPreview/ProjectPreview'
import SocialButton from '@/components/dom/SocialButton/SocialButton'
import Instagram from '@/components/dom/icons/Instagram'
import Linkedin from '@/components/dom/icons/LinkedIn'
import Twitter from '@/components/dom/icons/Twitter'
import dynamic from 'next/dynamic'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { dataBlog } from '@/utils/data/blog/dp'
import PreviewCard from '@/components/dom/ProjectPreview/PreviewCard'
import { whiteA } from '@radix-ui/colors'
import vertexShader from '@/templates/Shader/example/vertexShader'
import fragmentShader from '@/templates/Shader/example/fragmentShader'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { Color, MathUtils, ShaderMaterial } from 'three'
import { OrbitControls, shaderMaterial } from '@react-three/drei'
import UploadcareImage from '@uploadcare/nextjs-loader';


const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export const Fragment = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  const hover = useRef(false)
  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 1.2,
      },
      u_time: {
        value: 0.0,
      },
    }),
    [],
  )
  useFrame((state) => {
    const { clock } = state
    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime()

    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      hover.current ? 0.85 : 0.15,
      0.02,
    )
  })

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      scale={0.8}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  )
}

export default function Page() {
  const t = useTranslations('Index')

  return (
    <>
      <div className='h-full'>
        <section className='grid sm:grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3 py-8 max-w-[90%] mx-auto '>
          <div className="h-full rounded-3xl p-10 flex-col gap-16 bg-[url('/svg/gradient-bg.svg')] bg-cover ">
            <h1 className='text-4xl font-bold text-white'>{t('heading')}</h1>
            <p className='flex-1 text-white  mt-14'>{t('paragraph')}</p>
            <div className=' flex flex-row mt-28 gap-4 lg:flex-row justify-self-end '>
              <button className='relative inline-flex group bg-green-400 px-4 py-2 rounded-3xl text-black  w-30 lg:w-auto'>
                <a href='https://t.me/marchitecht'>
                  {t('contact')}
                  <div className='absolute transitiona-all duration-2000 opacity-50 -inset-px bg-gradient-to-r from-green-800 to-[#44BCFF] rounded-md blur-md group-hover:opacity-100 group-hover:inset-1 group-hover:duration-500 animate-tilt'></div>
                </a>
              </button>
              <div className='flex items-center gap-4'>
                <SocialButton bgColor='linkedin'>
                  <Linkedin />
                </SocialButton>
              </div>
            </div>
          </div>
          {/* 3D */}
          <div className='w-full text-center flex w-full  flex-col items-start justify-center p-2 text-center rounded-3xl bg-gradient-to-r from-indigo-700 from-10% via-sky-900 via-50% animate-pulse drop-shadow-[0_0_50px_rgb(0,114,255)]'>
            <View className='flex h-96 w-full flex-col items-center justify-center '>
              <Suspense fallback={null}>
                <Logo scale={0.5} position={[0, 0, 0]} />
                <Common />
              </Suspense>
            </View>
          </div>
          {/* GLSL */}
          <div className='w-full text-center flex w-full  flex-col items-start justify-center p-2 text-center rounded-3xl bg-gradient-to-l from-purple-700 from-10% via-lime-900 via-50% animate-pulse drop-shadow-[0_0_50px_rgb(0,114,255)]'>
            <View className='flex h-96 w-full flex-col items-center justify-center '>
              <Suspense fallback={null}>
                <Fragment />
                <Common />
              </Suspense>
            </View>
          </div>
         
        </section>

        <section className=' max-w-[90%] mx-auto h-full'>
          {/* POSTs */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full'>
            {Object.values(dataBlog).map((item) => (
              <PreviewCard
                name={item.title === 'dp' ? `${t('dp-title')}` : `${t('event-loop-title')}`}
                description={item.title === 'dp' ? `${t('dp-description')}` : `${t('event-loop-description')}`}
                link={`/blog/${item.path}`}
                button={t('button')}
                key={item.id}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
