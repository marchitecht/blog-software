'use client'

import ProjectPreview from '@/components/dom/ProjectPreview/ProjectPreview'
import SocialButton from '@/components/dom/SocialButton/SocialButton'
import Instagram from '@/components/dom/icons/Instagram'
import Linkedin from '@/components/dom/icons/LinkedIn'
import Twitter from '@/components/dom/icons/Twitter'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'
import { useTranslations } from 'next-intl'
import { dataBlog } from '@/utils/data/blog/dp'

const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })
// const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })
// const Duck = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Duck), { ssr: false })
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

export default function Page() {
  const t = useTranslations('Index')

  return (
    <>
      <section className='grid sm:grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3 py-8 max-w-[90%] mx-auto '>
        {/* jumbo */}
        <div className="h-full rounded-3xl p-10 flex-col gap-16 bg-[url('/svg/gradient-bg.svg')] bg-cover ">
          <h1 className='text-4xl font-bold text-white'>{t('heading')}</h1>
          <p className='flex-1 text-white  mt-14'>{t('paragraph')}</p>
          <div className='flex flex-row mt-28 gap-4 lg:flex-row justify-self-end '>
            <button className='bg-green-500 px-4 py-2 rounded-3xl text-black  w-30 lg:w-auto'>
              <a href='mailto:martin.musinn@gmail.com'>{t('contact')}</a>
            </button>
            {/* <div className='flex items-center gap-4'>
              <SocialButton bgColor='twitter'>
                <Twitter />
              </SocialButton>
              <SocialButton bgColor='linkedin'>
                <Linkedin />
              </SocialButton>
              <SocialButton bgColor='instagram'>
                <Instagram />
              </SocialButton>
            </div> */}
          </div>
        </div>

        <div className='w-full text-center flex w-full h-full flex-col items-start justify-center p-2 text-center rounded-3xl bg-gradient-to-r from-indigo-700 from-10% via-sky-900 via-50% animate-pulse drop-shadow-[0_0_50px_rgb(0,114,255)]'>
          <View className='flex h-96 w-full flex-col items-center justify-center '>
            <Suspense fallback={null}>
              <Logo scale={0.5} position={[0, 0, 0]} />
              <Common />
            </Suspense>
          </View>
        </div>
      </section>

      <section className='grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-[90%] mx-auto '>
        {/* first row */}
        {Object.values(dataBlog).map((item) => (
          <ProjectPreview
            name={t('title')}
            description={t('description')}
            imageUrl={item.imageUrl}
            bgColor={item.bgColor}
            key={item.id}
            link={`/blog/${item.path}`}
          />
        ))}
      </section>
    </>
  )
}
