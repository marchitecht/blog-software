'use client'

import cls from './Article.module.scss'
import clss from './Mobile.module.scss'
import useWindowSize from '../../../src/hooks/use-windows-size'
export default function Page() {
  const size = useWindowSize()

  const MobileOnly = () => {
    if (size.width < 960) {
      return (
        <div className={clss['mobileOnly']}>
          <div className={clss['wrapper']}>
            <p className={clss['textWrapper']}>Posted by:</p>
            <div className={clss['article-layout-authors']}>
              <div className={clss['article-layout-container']}>
                <div className={clss['article-layout-authorBorder']}>
                  <div className={cls['stack-item']}>
                    <span className={cls['avatar']}>
                      <img className={cls['image']} src='https://vercel.com/api/www/avatar?u=drcmda&s=72' alt='' />
                    </span>
                    <div className={cls['stack-stack']}>
                      <a>
                        <p className={cls['text_wrapper-name']}>Mark Musin</p>
                      </a>
                      <p className={cls['text_wrapper']}>Software engineer</p>
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
                ← Back to {/* */}Blog
              </a>
            </div>
          </div>
          <div className={cls['article-layout_titleWrapper']}>
            <div className={cls['article-layout_categoryWrapper']}>
              <a className={cls['link_link']} href='/blog/category/engineering'>
                <div className={`${cls['article-layout_pill']} ${cls['article-layout_pillGradientBackground']}`}>
                  <p className={cls['text_wrapper']}>Engineering</p>
                </div>
              </a>
              <p className={cls['text_wrapper']} style={{ color: '#a1a1a1' }}>
                Friday October 21st 2022
              </p>
            </div>
            <h1 className={cls['article-layout_title']}>
              <span className={cls['title']} style={{ display: 'inline-block', verticalAlign: 'top' }}>
                Building an interactive WebGL experience in Next.js
              </span>
            </h1>
            <p className={cls['article-layout_subtitle']}>
              <span className={cls['subtitle']}>
                Bring your creativity to life with the web 3D graphic rendering API.
              </span>
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
                <p className={cls['post-content']}>
                  WebGL is a JavaScript API for rendering 3D graphics within a web browser, giving developers the
                  ability to create unique, delightful graphics, unlike anything a static image is capable of. By
                  leveraging WebGL, we were able to take what would have been a static conference signup and turned it
                  into{' '}
                </p>
                <p className={cls['post-content']}>
                  WebGL is a JavaScript API for rendering 3D graphics within a web browser, giving developers the
                  ability to create unique, delightful graphics, unlike anything a static image is capable of. By
                  leveraging WebGL, we were able to take what would have been a static conference signup and turned it
                  into{' '}
                </p>
                <hr style={{ borderTop: '1px solid gray', margin: '50px 0' }} />
                <h2 className={cls['paragraph-header']}>The big idea</h2>
                <p className={cls['post-content']}>
                  WebGL is a JavaScript API for rendering 3D graphics within a web browser, giving developers the
                  ability to create unique, delightful graphics, unlike anything a static image is capable of. By
                  leveraging WebGL, we were able to take what would have been a static conference signup and turned it
                  into{' '}
                </p>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className={cls['desktopOnly']}>
              <div className={cls['article-layout_articleSidebar']}>
                <div className={cls['stack']}>
                  <p className={cls['text_wrapper']}>Posted by:</p>
                  <div className={cls['stack-item']}>
                    <span className={cls['avatar']}>
                      <img className={cls['image']} src='https://vercel.com/api/www/avatar?u=drcmda&s=72' alt='' />
                    </span>
                    <div className={cls['stack-stack']}>
                      <a>
                        <p className={cls['text_wrapper-name']}>Mark Musin</p>
                      </a>
                      <p className={cls['text_wrapper']}>Software engineer</p>
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
              <p className={clss['post-content']}>
                WebGL is a JavaScript API for rendering 3D graphics within a web browser, giving developers the ability
                to create unique, delightful graphics, unlike anything a static image is capable of. By leveraging
                WebGL, we were able to take what would have been a static conference signup and turned it into{' '}
              </p>
              <p className={clss['post-content']}>
                WebGL is a JavaScript API for rendering 3D graphics within a web browser, giving developers the ability
                to create unique, delightful graphics, unlike anything a static image is capable of. By leveraging
                WebGL, we were able to take what would have been a static conference signup and turned it into{' '}
              </p>
              <hr style={{ borderTop: '1px solid gray', margin: '50px 0' }} />
              <h2 className={clss['paragraph-header']}>The big idea</h2>
              <p className={cls['post-content']}>
                WebGL is a JavaScript API for rendering 3D graphics within a web browser, giving developers the ability
                to create unique, delightful graphics, unlike anything a static image is capable of. By leveraging
                WebGL, we were able to take what would have been a static conference signup and turned it into{' '}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
