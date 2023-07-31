'use client'
import { useTranslations } from 'next-intl'
import cls from './Navbar1.module.scss'
import LocaleSwitcher from './LocaleSwitcher'

export default function Navbar1(params) {
  const t = useTranslations('Navigation')
  return (
    <header className={cls.headerWrapper}>
      <div className='top-0 z-10 h-16 pt-6'>
        <div className='sm:px-8  w-full'>
          <div className='mx-auto w-full max-w-7xl lg:px-8'>
            <div className='relative px-4 sm:px-8 lg:px-12'>
              <div className='mx-auto max-w-xl lg:max-w-5xl'>
                <div className='relative flex gap-16'>
                  <div className='flex flex-1 '>
                    <div className='h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'>
                      <a href='/'>m</a>
                    </div>
                  </div>
                  <div className='flex flex-1 justify-center'>
                    <nav className='pointer-events-auto block'>
                      <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
                        <li>
                          <a
                            className='relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400'
                            href='/about'
                          >
                            {t('About')}
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className='flex justify-end flex-1'>
                    <div className='pointer-events-auto'>
                      <LocaleSwitcher />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
