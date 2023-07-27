'use client'

import cls from './Article.module.scss'
import clss from './Mobile.module.scss'
import useWindowSize from '@/utils/hooks/use-windows-size'
import { useTranslations } from 'next-intl'

export default function Article({ data, path }) {

  const t = useTranslations('Article')

  const tLocal = useTranslations(path)

  const size = useWindowSize()
  const MobileOnly = () => {
    if (size.width < 960) {
      return (
        <div className={clss['mobileOnly']}>
          <div className={clss['wrapper']}>
            <p className={clss['textWrapper']}>{t('posted')}</p>
            <div className={clss['article-layout-authors']}>
              <div className={clss['article-layout-container']}>
                <div className={clss['article-layout-authorBorder']}>
                  <div className={cls['stack-item']}>
                    <span className={cls['avatar']}>
                      <img className={cls['image']} src='https://vercel.com/api/www/avatar?u=drcmda&s=72' alt='' />
                    </span>
                    <div className={cls['stack-stack']}>
                      <a>
                        <p className={cls['text_wrapper-name']}>{t('name')}</p>
                      </a>
                      <p className={cls['text_wrapper']}>{t('occupation')}</p>
                    </div>
                  </div>
                </div>
                <div className={clss['article-layout-authorOverlay']}></div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return false
  }

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
                  <p className={cls['text_wrapper']}> {tLocal('badge')}</p>
                </div>
              </a>
              <p className={cls['text_wrapper']} style={{ color: '#a1a1a1' }}>
                {/* Friday October 21st 2022 */}
                {tLocal('date')}
              </p>
            </div>
            <h1 className={cls['article-layout_title']}>
              <span className={cls['title']} style={{ display: 'inline-block', verticalAlign: 'top' }}>
                {/* {data.data.map((item) => item.title)} */}
                {tLocal('title')}
              </span>
            </h1>
            <p className={cls['article-layout_subtitle']}>
              {/* <span className={cls['subtitle']}>{data.data.map((item) => item.subtitle)}</span> */}
            </p>
          </div>
        </div>
      </section>
      <MobileOnly />
      {size.width > 960 && (
        <section className={cls['article-layout_article']}>
          <>
            {/* ARTICLE */}
            <div className={cls['article-layout_articleWrapper']}>
              <div className={cls['post']}>
                {/* <p className={cls['post-content']}>{data.data.map((item) => item.postContent1)}</p> */}
                {/* <p className={cls['post-content']}>{data.data.map((item) => item.postContent2)}</p> */}
                <hr style={{ borderTop: '1px solid gray', margin: '50px 0' }} />
                <h2 className={cls['paragraph-header']}>The big idea</h2>
                {/* <p className={cls['post-content']}>{data.data.map((item) => item.postContent3)}</p> */}
              </div>
            </div>

            {/* SIDEBAR */}
            <div className={cls['desktopOnly']}>
              <div className={cls['article-layout_articleSidebar']}>
                <div className={cls['stack']}>
                  <p className={cls['text_wrapper']}>{t('posted')}</p>
                  <div className={cls['stack-item']}>
                    <span className={cls['avatar']}>
                      <img className={cls['image']} src='https://vercel.com/api/www/avatar?u=drcmda&s=72' alt='' />
                    </span>
                    <div className={cls['stack-stack']}>
                      <a>
                        <p className={cls['text_wrapper-name']}>{t('name')}</p>
                      </a>
                      <p className={cls['text_wrapper']}>{t('occupation')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </section>
      )}
      {size.width < 960 && (
        <section className={clss['article-layout_article']}>
          <div className={clss['article-layout_articleWrapper']}>
            <div className={clss['post']}>
              {/* <p className={clss['post-content']}>{data.data.map((item) => item.postContent1)}</p> */}
              {/* <p className={clss['post-content']}>{data.data.map((item) => item.postContent2)}</p> */}
              <hr style={{ borderTop: '1px solid gray', margin: '50px 0' }} />
              <h2 className={clss['paragraph-header']}>The big idea</h2>
              {/* <p className={cls['post-content']}>{data.data.map((item) => item.postContent3)}</p> */}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
