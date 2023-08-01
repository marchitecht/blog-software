'use client'
import { useTranslations } from 'next-intl'
// import CV from '../../../../public/FrontendMarat.pdf'
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
              <a href='/CV_Marat.pdf' className={cls['link_link']}>
                <div className={`${cls['article-layout_pill']} ${cls['article-layout_pillGradientBackground']}`}>
                  <div className={cls['text_wrapper']}> {t('badge')}</div>

                  {/* CV */}
                </div>
              </a>
              <p className={cls['text_wrapper']} style={{ color: '#a1a1a1' }}>
                {t('date')}
              </p>
            </div>
            <h2 className={cls['article-layout_title']}>
              <span className={cls['title']} style={{ display: 'inline-block', verticalAlign: 'top' }}>
                {t('title')}
              </span>
            </h2>
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
      <section className={cls['article-layout_headerWrapper']}>
        <div className={`${cls['article-layout_header']} ${cls['article-layout_headerWithHeroImage']}`}>
          <div className={cls['article-layout_titleWrapper']}>
            <h2 className={cls['about-layout_title']}>
              <span className={cls['about-title']} style={{ display: 'inline-block', verticalAlign: 'top' }}>
                {t('heading')}
              </span>
            </h2>
            <div>
              <span className='border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline mr-1'>
                {/* {t('techs')} */}
                Next.js
                <svg
                  className='ml-1'
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  class='inline-flex mr-1'
                >
                  <path
                    d='M5.13979 0.00296175C5.11613 0.00511197 5.04086 0.0126378 4.97312 0.0180134C3.41075 0.158853 1.94731 1.00174 1.02043 2.29725C0.504301 3.01757 0.174194 3.83466 0.0494624 4.70012C0.00537635 5.00223 0 5.09146 0 5.50108C0 5.91069 0.00537635 5.99993 0.0494624 6.30204C0.348387 8.36732 1.81828 10.1026 3.81183 10.7455C4.16882 10.8605 4.54516 10.939 4.97312 10.9863C5.13978 11.0046 5.86022 11.0046 6.02688 10.9863C6.76559 10.9046 7.3914 10.7218 8.0086 10.4068C8.10323 10.3584 8.12151 10.3455 8.1086 10.3348C8.1 10.3283 7.69677 9.78754 7.2129 9.13388L6.33333 7.94588L5.23118 6.31494C4.62473 5.41829 4.12581 4.68507 4.12151 4.68507C4.1172 4.68399 4.1129 5.40862 4.11075 6.29343C4.10753 7.84267 4.10645 7.90503 4.0871 7.94158C4.05914 7.99426 4.03763 8.01576 3.99247 8.03941C3.95806 8.05662 3.92796 8.05984 3.76559 8.05984H3.57957L3.53011 8.02866C3.49785 8.00824 3.47419 7.98136 3.45806 7.95018L3.43548 7.9018L3.43763 5.7462L3.44086 3.58953L3.47419 3.5476C3.4914 3.52502 3.52796 3.496 3.55376 3.48202C3.59785 3.46052 3.61505 3.45837 3.80108 3.45837C4.02043 3.45837 4.05699 3.46697 4.11398 3.52932C4.13011 3.54653 4.72688 4.44532 5.44086 5.52796C6.15484 6.61059 7.13118 8.08887 7.61075 8.81457L8.48172 10.1337L8.52581 10.1047C8.91613 9.85098 9.32903 9.48974 9.65591 9.11345C10.3516 8.31464 10.8 7.34059 10.9505 6.30204C10.9946 5.99993 11 5.91069 11 5.50108C11 5.09146 10.9946 5.00223 10.9505 4.70012C10.6516 2.63483 9.18172 0.899604 7.18817 0.256688C6.83656 0.142726 6.46237 0.0642427 6.04301 0.0169378C5.93978 0.00618668 5.22903 -0.00563913 5.13979 0.00296175ZM7.3914 3.32935C7.44301 3.35516 7.48495 3.40461 7.5 3.45622C7.5086 3.48417 7.51075 4.08193 7.5086 5.42905L7.50538 7.36209L7.16452 6.83959L6.82258 6.31709V4.91192C6.82258 4.00345 6.82688 3.49277 6.83333 3.46804C6.85054 3.40784 6.88817 3.36053 6.93979 3.33258C6.98387 3.31 7 3.30785 7.16882 3.30785C7.32796 3.30785 7.35591 3.31 7.3914 3.32935Z'
                    fill='currentColor'
                  ></path>
                </svg>
              </span>
              <span className='border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline mr-1 '>
                {/* {t('techs')} */}
                React
                <svg
                  className='ml-1'
                  width='14'
                  height='12'
                  viewBox='0 0 14 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  class='inline-flex mr-1'
                >
                  <path
                    d='M12.3029 5.50126C12.3029 4.68299 11.2822 3.90753 9.71741 3.42664C10.0785 1.82536 9.91803 0.551385 9.21085 0.143511C9.04785 0.047837 8.85726 0.0025177 8.64912 0.0025177V0.563973C8.76447 0.563973 8.85726 0.586633 8.935 0.629435C9.27605 0.825818 9.42401 1.57359 9.30865 2.53536C9.28107 2.77203 9.23593 3.02129 9.18076 3.27558C8.68924 3.15473 8.15259 3.06157 7.58836 3.00114C7.24981 2.53536 6.89873 2.11238 6.54515 1.74227C7.36266 0.9794 8.13002 0.561456 8.65163 0.561456V0C7.96201 0 7.05923 0.493477 6.14642 1.34951C5.23361 0.498512 4.33083 0.010071 3.64121 0.010071V0.571527C4.16031 0.571527 4.93017 0.986953 5.74769 1.74479C5.39661 2.1149 5.04553 2.53536 4.712 3.00114C4.14526 3.06157 3.60861 3.15473 3.11709 3.2781C3.05942 3.02632 3.01679 2.7821 2.98669 2.54795C2.86883 1.58618 3.01428 0.838407 3.35282 0.639506C3.42805 0.594186 3.52585 0.574044 3.64121 0.574044V0.0125887C3.43056 0.0125887 3.23997 0.0579079 3.07446 0.153582C2.36979 0.561456 2.21181 1.83291 2.57543 3.42916C1.01563 3.91257 0 4.68551 0 5.50126C0 6.31952 1.02064 7.09499 2.58546 7.57587C2.22435 9.17716 2.38484 10.4511 3.09202 10.859C3.25502 10.9547 3.44561 11 3.65625 11C4.34588 11 5.24865 10.5065 6.16146 9.65049C7.07427 10.5015 7.97705 10.9899 8.66667 10.9899C8.87732 10.9899 9.06791 10.9446 9.23342 10.8489C9.93809 10.4411 10.0961 9.1696 9.73245 7.57336C11.2872 7.09247 12.3029 6.31701 12.3029 5.50126ZM9.03782 3.82193C8.94503 4.14672 8.82968 4.48157 8.69927 4.81643C8.59646 4.61501 8.48863 4.4136 8.37076 4.21218C8.25541 4.01076 8.13253 3.81437 8.00965 3.62303C8.36575 3.6759 8.70931 3.74136 9.03782 3.82193ZM7.88928 6.50332C7.69368 6.84321 7.49306 7.16548 7.28492 7.46509C6.91127 7.49782 6.53261 7.51545 6.15143 7.51545C5.77277 7.51545 5.3941 7.49783 5.02296 7.46761C4.81482 7.168 4.61169 6.84825 4.41609 6.51087C4.22551 6.18105 4.05247 5.84619 3.89449 5.50881C4.04997 5.17143 4.22551 4.83406 4.41358 4.50423C4.60919 4.16434 4.8098 3.84207 5.01794 3.54246C5.39159 3.50973 5.77026 3.4921 6.15143 3.4921C6.5301 3.4921 6.90876 3.50973 7.27991 3.53994C7.48805 3.83955 7.69117 4.1593 7.88677 4.49668C8.07736 4.8265 8.25039 5.16136 8.40838 5.49874C8.25039 5.83612 8.07736 6.17349 7.88928 6.50332ZM8.69927 6.17601C8.83469 6.51339 8.95005 6.85077 9.04534 7.17807C8.71683 7.25864 8.37076 7.32662 8.01216 7.37949C8.13504 7.18563 8.25792 6.98672 8.37327 6.78279C8.48863 6.58137 8.59646 6.37743 8.69927 6.17601ZM6.15645 8.86244C5.92323 8.62074 5.69001 8.35134 5.4593 8.05676C5.685 8.06683 5.91571 8.07439 6.14893 8.07439C6.38465 8.07439 6.61787 8.06935 6.84607 8.05676C6.62038 8.35134 6.38716 8.62074 6.15645 8.86244ZM4.29071 7.37949C3.93461 7.32662 3.59105 7.26116 3.26254 7.18059C3.35533 6.8558 3.47068 6.52094 3.60108 6.18608C3.7039 6.3875 3.81173 6.58892 3.92959 6.79034C4.04746 6.99176 4.16783 7.18814 4.29071 7.37949ZM6.14391 2.14008C6.37713 2.38178 6.61035 2.65118 6.84106 2.94575C6.61536 2.93568 6.38465 2.92813 6.15143 2.92813C5.91571 2.92813 5.68249 2.93317 5.45429 2.94575C5.67998 2.65118 5.9132 2.38178 6.14391 2.14008ZM4.2882 3.62303C4.16532 3.81689 4.04244 4.01579 3.92709 4.21973C3.81173 4.42115 3.7039 4.62257 3.60108 4.82399C3.46567 4.48661 3.35031 4.14923 3.25502 3.82193C3.58353 3.74388 3.9296 3.6759 4.2882 3.62303ZM2.01871 6.77523C1.13098 6.39506 0.556713 5.89654 0.556713 5.50126C0.556713 5.10597 1.13098 4.60494 2.01871 4.22728C2.23438 4.13413 2.4701 4.05104 2.71335 3.97299C2.85629 4.46647 3.04437 4.98009 3.27759 5.50629C3.04688 6.02998 2.86131 6.54108 2.72088 7.03204C2.47261 6.95399 2.23689 6.86839 2.01871 6.77523ZM3.36787 10.3731C3.02682 10.1767 2.87886 9.42893 2.99422 8.46715C3.0218 8.23049 3.06694 7.98123 3.12211 7.72694C3.61362 7.84779 4.15027 7.94095 4.71451 8.00137C5.05305 8.46715 5.40413 8.89013 5.75772 9.26024C4.94021 10.0231 4.17284 10.4411 3.65124 10.4411C3.53839 10.4385 3.4431 10.4159 3.36787 10.3731ZM9.31617 8.45457C9.43404 9.41634 9.28859 10.1641 8.95005 10.363C8.87481 10.4083 8.77701 10.4285 8.66166 10.4285C8.14256 10.4285 7.37269 10.013 6.55518 9.25521C6.90626 8.8851 7.25734 8.46464 7.59086 7.99886C8.15761 7.93843 8.69426 7.84527 9.18577 7.7219C9.24345 7.9762 9.28859 8.22042 9.31617 8.45457ZM10.2816 6.77523C10.066 6.86839 9.83026 6.95148 9.58701 7.02953C9.44407 6.53605 9.25599 6.02243 9.02277 5.49622C9.25348 4.97253 9.43905 4.46143 9.57948 3.97047C9.82775 4.04852 10.0635 4.13413 10.2842 4.22728C11.1719 4.60746 11.7462 5.10597 11.7462 5.50126C11.7436 5.89654 11.1694 6.39757 10.2816 6.77523Z'
                    fill='#61DAFB'
                  ></path>
                  <path
                    d='M6.13697 6.65389C6.77191 6.65389 7.28663 6.13725 7.28663 5.49994C7.28663 4.86263 6.77191 4.34599 6.13697 4.34599C5.50203 4.34599 4.9873 4.86263 4.9873 5.49994C4.9873 6.13725 5.50203 6.65389 6.13697 6.65389Z'
                    fill='#61DAFB'
                  ></path>
                </svg>
              </span>
              <span className='border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline '>
                {/* {t('techs')} */}
                Sass
                <svg xmlns='http://www.w3.org/2000/svg' width={12} height={14} viewBox='0 0 512 384'>
                  <path
                    fill='#CF649A'
                    d='M440.6 220.6c-17.9.1-33.4 4.4-46.4 10.8-4.8-9.5-9.6-17.8-10.4-24-.9-7.2-2-11.6-.9-20.2s6.1-20.8 6.1-21.8c-.1-.9-1.1-5.3-11.4-5.4-10.3-.1-19.2 2-20.2 4.7s-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.1-17.6-.9-7.2-2-11.6-.9-20.2s6.1-20.8 6.1-21.8c-.1-.9-1.1-5.3-11.4-5.4-10.3-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3c-2.1 6.2-27.1 61.8-33.6 76.3-3.3 7.4-6.2 13.3-8.3 17.3s-.1.3-.3.7c-1.8 3.4-2.8 5.3-2.8 5.3v.1c-1.4 2.5-2.9 4.9-3.6 4.9-.5 0-1.5-6.7.2-15.9 3.7-19.3 12.7-49.4 12.6-50.5 0-.5 1.7-5.8-5.8-8.5-7.3-2.7-9.9 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.9-15.5-33.9c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.9-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1l-1.1-1.2c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.6-101.8 78.3-39 141-28.3 151.9-4.5 15.5 34-33.5 97.2-114.9 106.3-31 3.5-47.3-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.9 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8-42.1 15-87.7 38.4-120.5 69.1-39 36.4-45.2 68.2-42.6 81.4 9.1 47.1 74 77.8 100 100.5-1.3.7-2.5 1.4-3.6 2-13 6.4-62.5 32.3-74.9 59.7-14 31 2.2 53.3 13 56.3 33.4 9.3 67.6-7.4 86.1-34.9 18.4-27.5 16.2-63.2 7.7-79.5l-.3-.6 10.2-6c6.6-3.9 13.1-7.5 18.8-10.6-3.2 8.7-5.5 19-6.7 34-1.4 17.6 5.8 40.4 15.3 49.4 4.2 3.9 9.2 4 12.3 4 11 0 16-9.1 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1c.8-1.2 1.2-1.9 1.2-1.9v-.2c3-5.2 9.7-17.1 19.7-36.8 12.9-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.2 7.6 7 15.9 10.7 24-3 4.2-4.8 6.6-4.8 6.6l.1.1c-2.4 3.2-5.1 6.6-7.9 10-10.2 12.2-22.4 26.1-24 30.1-1.9 4.7-1.5 8.2 2.2 11 2.7 2 7.5 2.4 12.6 2 9.2-.6 15.6-2.9 18.8-4.3 5-1.8 10.7-4.5 16.2-8.5 10-7.4 16.1-17.9 15.5-31.9-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.8-2.6 2.7-4 15.8-23.1 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.9 6.5 5.7 13.6 9.1 20.6-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.9.8 9.5-1 13.7-2.8 5.2-1.7 11.5-4.6 17.3-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.9-8.2 49.6-5.7 44.5 5.2 53.3 33 51.6 44.6-1.7 11.6-11 18-14.1 20-3.1 1.9-4.1 2.6-3.8 4 .4 2.1 1.8 2 4.5 1.6 3.7-.6 23.4-9.5 24.2-30.9 1.2-27.5-24.9-57.5-71.2-57.2zm-343.2 115.7c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.8-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.2 9.1-5.5.6-.4 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.6-1.5-9-25.8-1.1-49.8 4-12.1 12.5-26.5 17.5-32.1 8.1-9 16.9-12 19.1-8.3 2.6 4.8-9.9 39.6-13.1 47.4zm88.7 42.4c-2.2 1.1-4.2 1.9-5.1 1.3-.7-.4.9-1.9.9-1.9s11.1-11.9 15.5-17.4c2.5-3.2 5.5-6.9 8.7-11.1v1.2c0 14.4-13.8 24-20 27.9zm68.4-15.6c-1.6-1.2-1.4-4.9 4-16.5 2.1-4.6 6.9-12.3 15.2-19.6 1 3 1.6 5.9 1.5 8.6-.1 18-12.9 24.7-20.7 27.5z'
                  />
                </svg>
              </span>
              <span className='border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline ml-1 '>
                {/* {t('techs')} */}
                React-three-fiber
                <img className='ml-1' src='/pmndrs.png' width={12} height={14} alt='' />
              </span>
              <span className='border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline ml-1 mt-1'>
                {/* {t('techs')} */}
                MUI
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={12}
                  height={14}
                  className='ml-1'
                  viewBox='0 0 36 32'
                  fill='none'
                  class='css-1170n61'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z'
                    fill='#007FFF'
                  ></path>
                </svg>
              </span>
              <span className='border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline ml-1 mt-1'>
                {/* {t('techs')} */}
                GSAP
              </span>
              <span className='border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline ml-1 mt-1'>
                {/* {t('techs')} */}
                express.js
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className={cls['article-layout_headerWrapper']}>
        <div className={`${cls['article-layout_header']} ${cls['article-layout_headerWithHeroImage']}`}>
          <div className={cls['article-layout_titleWrapper']}>
            <h2 className={cls['about-layout_title']}>
              <span className={cls['about-title']} style={{ display: 'inline-block', verticalAlign: 'top' }}>
                {t('techs')}
              </span>
            </h2>
            <div className='justify-between mb-14'>
              <span className='border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline mr-1'>
                Scrum
              </span>
              <span className='border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline mr-1'>
                Agile
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
