'use client'

import cls from './Navbar.module.scss'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { CaretDownIcon } from '@radix-ui/react-icons'
import Link from 'next-intl/link'
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
        <a href='#'>
          <img src='/svg/NaisLogo.svg' alt='' />
        </a>
      </div>
      <div className={cls['nav-mobile-section']}>
        <div className={`${cls['nav-section']} ${cls['nav-link-section']} `}>
          {/* <div className={cls[ 'button']}> */}
          <a href=''>{t('About')}</a>
          {/* </div> */}
          {/* <a href='#'>BLOG</a> */}
        </div>
        <div className={`${cls['nav-language-section']} ${cls['nav-section']} `}>
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  )
}
