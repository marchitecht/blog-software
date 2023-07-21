'use client'

import ProjectPreview from '@/components/dom/ProjectPreview/ProjectPreview'
import SocialButton from '@/components/dom/SocialButton/SocialButton'
import Instagram from '@/components/dom/icons/Instagram'
import Linkedin from '@/components/dom/icons/LinkedIn'
import Twitter from '@/components/dom/icons/Twitter'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next-intl/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { CaretDownIcon } from '@radix-ui/react-icons'
// import { ListItem } from '@/components/dom/Select/Select'
import Arealight from '@/components/dom/Arealight/Arealight'

const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })
const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })
const Duck = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Duck), { ssr: false })
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

const countries = { english: '🇬🇧', russian: '🇪🇸' }

export default function Page() {
  const t = useTranslations('Index')
  const [value, setValue] = useState('en')

  return (
    <>
      <NavigationMenu.Root className='relative z-[1] flex w-screen justify-center'>
        <NavigationMenu.List className='center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]'>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className='text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]'>
              Languages{' '}
              <CaretDownIcon
                className='text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180'
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className='data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto'>
              <ul className='one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-1'>
                <Link
                  className='focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors'
                  href='/'
                  locale='en'
                >
                  {/* <ListItem> */}
                  🇬🇧
                  {/* </ListItem> */}
                </Link>
                {/* <ListItem> */}
                <Link
                  className='focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors'
                  href='/'
                  locale='ru'
                >
                  🇷🇺
                </Link>{' '}
                {/* </ListItem> */}
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Indicator className='data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]'>
            <div className='relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white' />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>
        <div className='perspective-[2000px] absolute top-full left-0 flex w-full justify-center'>
          <NavigationMenu.Viewport className='data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[120px]  overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[90px]' />
        </div>
      </NavigationMenu.Root>

      <section className='grid sm:grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3 py-8 max-w-[90%] mx-auto'>
        {/* jumbo */}
        <div className="h-full rounded-3xl p-10 flex-col gap-16 bg-[url('/svg/gradient-bg.svg')] bg-cover ">
          <h1 className='text-4xl font-bold text-white'>{t('title')}</h1>
          <p className='flex-1 text-white  mt-14'>{t('description')}</p>
          <div className='flex flex-row mt-28 gap-4 lg:flex-row justify-self-end '>
            <button className='bg-green-500 px-4 py-2 rounded-3xl text-black  w-30 lg:w-auto'>{t('contact')}</button>
            <div className='flex items-center gap-4'>
              <SocialButton bgColor='twitter'>
                <Twitter />
              </SocialButton>
              <SocialButton bgColor='linkedin'>
                <Linkedin />
              </SocialButton>
              <SocialButton bgColor='instagram'>
                <Instagram />
              </SocialButton>
            </div>
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
      {/* Arealight goes here */}
      {/* <Arealight /> */}

      <section className='grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-[90%] mx-auto'>
        {/* first row */}

        <ProjectPreview
          name={t('dpName')}
          description={t('dpDescription')}
          imageUrl='/svg/DpLogo.svg'
          bgColor='bg-gradient-to-r from-black from-40% via-red-900 via-95%'
        />
        <ProjectPreview
          name={t('naisName')}
          description={t('naisDescription')}
          imageUrl='/svg/NaisLogo.svg'
          bgColor='bg-gradient-to-r from-black from-60% via-green-900 via-90%'
        />
        <ProjectPreview />
      </section>
      
    </>
  )
}



// ;<section className='grid sm:grid-cols-1 lg:grid-cols-[1fr_1fr] gap-3 py-8 mx-auto max-w-[90%] '>
//   <div className='relative h-full py-6 px-6 text-center'>
//     <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>Events are propagated</h2>
//     <p className='mb-8 text-gray-600'>Drag, scroll, pinch, and rotate the canvas to explore the 3D scene.</p>
//   </div>
//   <div className='relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-22 '>
//     <View orbit className='relative h-full  sm:w-full'>
//       <Suspense fallback={null}>
//         <Dog scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
//         <Common color={'lightpink'} />
//       </Suspense>
//     </View>
//   </div>
//   {/* second row */}
//   <div className='relative my-12 h-full w-full py-6 sm:w-1/2 md:mb-40'>
//     <View orbit className='relative h-full animate-bounce sm:h-48 sm:w-full'>
//       <Suspense fallback={null}>
//         <Duck route='/blob' scale={2} position={[0, -1.6, 0]} />
//         <Common color={'lightblue'} />
//       </Suspense>
//     </View>
//   </div>
//   <div className='w-full p-6 sm:w-1/2'>
//     <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>Dom and 3D are synchronized</h2>
//     <p className='mb-8 text-gray-600'>
//       3D Divs are renderer through the View component. It uses gl.scissor to cut the viewport into segments. You tie a
//       view to a tracking div which then controls the position and bounds of the viewport. This allows you to have
//       multiple views with a single, performant canvas. These views will follow their tracking elements, scroll along,
//       resize, etc.
//     </p>
//   </div>
// </section>