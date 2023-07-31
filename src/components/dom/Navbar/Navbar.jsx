'use client'

import cls from './Navbar.module.scss'
import { useState } from 'react'
import Twitter from '../icons/Twitter'
import Linkedin from '../icons/LinkedIn'
import SocialButton from '../SocialButton/SocialButton'
import Instagram from '../icons/Instagram'
import { useTranslations } from 'next-intl'
import LocaleSwitcher from './LocaleSwitcher'

export default function Navbar() {
  const t = useTranslations('Navigation')
  return (
    <nav className={cls['container']}>
      <div className={`${cls['nav-section']} ${cls['nav-logo-section']} `}>
        {/* <a href='/'>marchitecht </a> */}
        {/* <div className=' text-center h-10 w-10 rounded-full bg-white/90 p-1 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'> */}
          <a href='/'>
            <img className='w-10 h-10 p-1 rounded-full ring-2 ring-gray-600' src='/marchitecht.jpg' alt='' />
          </a>
        {/* </div> */}
      </div>
     
      <div className={cls['nav-mobile-section']}>
        <div className={`${cls['nav-section']} ${cls['nav-link-section']} `}>
          <a href='/about'>{t('About')}</a>
          {/* <a href='#'>BLOG</a> */}
        </div>
        <div className={`${cls['nav-language-section']} ${cls['nav-section']} `}>
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  )
}
