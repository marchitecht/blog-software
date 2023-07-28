'use client'
import { useTranslations } from 'next-intl'
import About from './About'
import cls from './About1.module.scss'
export default function About1() {
  const t = useTranslations('About')
  return (
    <>
      <section className={cls['article-layout_headerWrapper']}>
        <div className={`${cls['article-layout_header']} ${cls['article-layout_headerWithHeroImage']}`}>
          <div className={cls['article-layout_backButtonWrapper']}>
            <div className={cls['article-layout_backButton']}>
              <a className={`${cls['link_link']} ${cls['link_secondary']}`} href='/'>
                {t('back')}
              </a>
            </div>
          </div>
          <div className={cls['article-layout_titleWrapper']}>
            <div className={cls['article-layout_categoryWrapper']}>
              <a className={cls['link_link']} href='/blog/category/engineering'>
                <div className={`${cls['article-layout_pill']} ${cls['article-layout_pillGradientBackground']}`}>
                  <p className={cls['text_wrapper']}> {t('badge')}</p>
                  {/* CV */}
                </div>
              </a>
              <p className={cls['text_wrapper']} style={{ color: '#a1a1a1' }}>
                {t('date')}
              </p>
            </div>
            <h1 className={cls['article-layout_title']}>
              <span className={cls['title']} style={{ display: 'inline-block', verticalAlign: 'top' }}>
                {t('title')}
              </span>
            </h1>
            <p className={cls['article-layout_subtitle']}>
              <span className={cls['subtitle']}>{t('subtitle')}</span>
            </p>
            <div className='mt-6 flex gap-6'>
              <a href='https://github.com/marchitecht' className='-m-1 -p-1'>
                <svg
                  ariaHidden='true'
                  className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'
                  viewBox='0 0 24 24'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 004.932-3.74A10.447 10.447 0 0022 12.253C22 6.588 17.525 2 12 2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
              <a href='https://github.com/marchitecht' className='-m-1 -p-1'>
                <svg
                  viewBox='0 0 24 24'
                  ariaHidden='true'
                  className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'
                >
                  <path d='M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z' />
                </svg>
              </a>
              <a href='https://hh.ru/resume/1d9c4d8aff0b4a0ede0039ed1f57796a687a30' className='-m-1 -p-1'>
                <svg
                  version='1.1'
                  viewBox='0 0 54 44'
                  className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M13.65 13.169v8.164c1.243-1.482 1.733-2.228 4.461-2.228.89 0 1.687.17 2.402.507.717.335 1.253.765 1.615 1.287.364.527.61 1.104.743 1.74.132.633.198 1.618.198 2.954v8.729h-3.862V26.46c0-1.56-.07-2.548-.217-2.968a1.917 1.917 0 00-.775-1c-.372-.251-.835-.375-1.394-.375-.64 0-1.214.16-1.713.478-.51.32-.876.798-1.108 1.437-.236.64-.354 1.585-.35 2.836l-.004 7.454H9.789V13.169h3.862m15.206 0v8.164c1.244-1.482 2.733-2.228 4.46-2.228.887 0 1.69.17 2.406.507.714.335 1.25.765 1.61 1.287a4.69 4.69 0 01.743 1.74c.133.633.199 1.618.199 2.954v8.729h-3.858V26.46c0-1.56-.073-2.548-.22-2.968a1.91 1.91 0 00-.777-1c-.368-.251-.835-.375-1.394-.375-.639 0-1.213.16-1.713.478-.503.32-.871.798-1.106 1.437-.232.64-.35 1.585-.35 2.836v7.454H25V13.169h3.857' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={cls['images-layout']}>
        <div className={cls['images-container']}>
          <div className={cls['image-wrapper']}>
            <img
              alt=''
              loading='lazy'
              width={3744}
              height={5616}
              decoding='async'
              className='absolute inset-0 h-full w-full object-cover'
              style={{ color: 'transparent' }}
              //   sizes='(min-width: 640px) 18rem, 11rem'
              //   srcSet='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=16&q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=32&q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=48&q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=64&q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=96&q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=128&q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=256&q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=384&q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=640&q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=750&q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=828&q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=1080&q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=1200&q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=1920&q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=2048&q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=3840&q=75 3840w'
              src='https://ucarecdn.com/65644964-99da-438e-996c-5ab85ca1317d/'
            />
          </div>

          <div className={cls['image-wrapper']}>
            <img
              alt=''
              loading='lazy'
              width={3936}
              height={2624}
              decoding='async'
              //   data-nimg={1}
              className='absolute inset-0 h-full w-full object-cover'
              style={{ color: 'transparent' }}
              //   sizes='(min-width: 640px) 18rem, 11rem'
              //   srcSet='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=16&q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=32&q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=48&q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=64&q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=96&q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=128&q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=256&q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=384&q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=640&q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=750&q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=828&q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=1080&q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=1200&q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=1920&q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=2048&q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=3840&q=75 3840w'
              src='https://ucarecdn.com/eee4905b-2365-4d9b-ad05-88b929f772be/'
            />
          </div>
          <div className={cls['image-wrapper']}>
            <img
              alt=''
              loading='lazy'
              width={3936}
              height={2624}
              decoding='async'
              //   data-nimg={1}
              className='absolute inset-0 h-full w-full object-cover'
              style={{ color: 'transparent' }}
              //   sizes='(min-width: 640px) 18rem, 11rem'
              //   srcSet='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=16&q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=32&q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=48&q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=64&q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=96&q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=128&q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=256&q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=384&q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=640&q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=750&q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=828&q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=1080&q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=1200&q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=1920&q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=2048&q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=3840&q=75 3840w'
              src='https://ucarecdn.com/dbfab468-264b-48a7-a24c-946fe5cdab6d/'
            />
          </div>
          <div className={cls['image-wrapper']}>
            <img
              alt=''
              loading='lazy'
              width={3936}
              height={2624}
              decoding='async'
              //   data-nimg={1}
              className='absolute inset-0 h-full w-full object-cover'
              style={{ color: 'transparent' }}
              //   sizes='(min-width: 640px) 18rem, 11rem'
              //   srcSet='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=16&q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=32&q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=48&q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=64&q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=96&q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=128&q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=256&q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=384&q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=640&q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=750&q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=828&q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=1080&q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=1200&q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=1920&q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=2048&q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=3840&q=75 3840w'
              src='https://ucarecdn.com/7f386edd-5337-40b6-9a17-33a5c2d08d18/'
            />
          </div>
          <div className={cls['image-wrapper']}>
            <img
              alt=''
              loading='lazy'
              width={3936}
              height={2624}
              decoding='async'
              //   data-nimg={1}
              className='absolute inset-0 h-full w-full object-cover'
              style={{ color: 'transparent' }}
              //   sizes='(min-width: 640px) 18rem, 11rem'
              //   srcSet='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=16&q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=32&q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=48&q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=64&q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=96&q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=128&q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=256&q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=384&q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=640&q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=750&q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=828&q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=1080&q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=1200&q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=1920&q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=2048&q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=3840&q=75 3840w'
              src='https://ucarecdn.com/e1b6d77c-a7bb-487b-a12a-4fb260d11c1c/'
            />
          </div>
        </div>
      </section>
    </>
  )
}
