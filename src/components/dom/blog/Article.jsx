'use client'

import cls from './Article.module.scss'
import clss from './Mobile.module.scss'
import useWindowSize from '@/utils/hooks/use-windows-size'
import { useTranslations } from 'next-intl'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'

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
                      <img className={cls['image']} src='/marchitecht.jpg' alt='' />
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
                {tLocal('title')}
              </span>
            </h1>
            <p className={cls['article-layout_subtitle']}>
              <span className={cls['subtitle']}>{tLocal('subtitle')}</span>
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
                {path === 'dp' && (
                  <div className='p-2 mb-4'>
                    <p className={cls['post-content']}>{tLocal('postContent1')}</p>
                    <p className={cls['post-content']}>{tLocal('postContent2')}</p>
                    <hr style={{ borderTop: '1px solid gray', margin: '50px 0' }} />
                    <h2 className={cls['paragraph-header']}>{tLocal('heading2')}</h2>
                    <p className={cls['post-content']}>{tLocal('postContent3')}</p>
                    <img
                      className='w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700 mt-8 '
                      src='https://media.giphy.com/media/Bs7lKLBKz7po6uMxUj/giphy.gif'
                      alt=''
                    />
                    <p className={cls['post-content']}>{tLocal('postContent4')}</p>
                    <h2 className={cls['paragraph-header']}>{tLocal('heading3')}</h2>
                    <p className={cls['post-content']}>{tLocal('postContent5')}</p>
                    <p className={cls['post-content']}>{tLocal('postContent6')}</p>
                    <SyntaxHighlighter language='javascript' style={nightOwl}>
                      {data.codestring1}
                    </SyntaxHighlighter>
                    <p className={cls['post-content']}>{tLocal('postContent7')}</p>
                    <SyntaxHighlighter language='javascript' style={nightOwl}>
                      {data.codestring2}
                    </SyntaxHighlighter>
                    <p className={cls['post-content']}>{tLocal('postContent8')}</p>
                    <SyntaxHighlighter language='javascript' style={nightOwl}>
                      {data.codestring3}
                    </SyntaxHighlighter>
                  </div>
                )}
              </div>
            </div>

            {/* SIDEBAR */}
            <div className={cls['desktopOnly']}>
              <div className={cls['article-layout_articleSidebar']}>
                <div className={cls['stack']}>
                  <p className={cls['text_wrapper']}>{t('posted')}</p>
                  <div className={cls['stack-item']}>
                    <span className={cls['avatar']}>
                      <img className={cls['image']} src='/marchitecht.jpg' alt='' />
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
              {path === 'dp' && (
                <div className='p-2 mb-8'>
                  <p className={cls['post-content']}>{tLocal('postContent1')}</p>
                  <p className={cls['post-content']}>{tLocal('postContent2')}</p>
                  <hr style={{ borderTop: '1px solid gray', margin: '50px 0' }} />
                  <h2 className={cls['paragraph-header']}>{tLocal('heading2')}</h2>
                  <p className={cls['post-content']}>{tLocal('postContent3')}</p>
                  <p className={cls['post-content']}>{tLocal('postContent4')}</p>
                  <h2 className={cls['paragraph-header']}>{tLocal('heading3')}</h2>
                  <p className={cls['post-content']}>{tLocal('postContent5')}</p>
                  <p className={cls['post-content']}>{tLocal('postContent6')}</p>
                  <SyntaxHighlighter language='javascript' style={nightOwl}>
                    {data.codestring1}
                  </SyntaxHighlighter>
                  <p className={cls['post-content']}>{tLocal('postContent7')}</p>
                  <SyntaxHighlighter language='javascript' style={nightOwl}>
                    {data.codestring2}
                  </SyntaxHighlighter>
                  <p className={cls['post-content']}>{tLocal('postContent8')}</p>
                  <SyntaxHighlighter language='javascript' style={nightOwl}>
                    {data.codestring3}
                  </SyntaxHighlighter>
                  <video
                    className='w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700'
                    src='https://media.giphy.com/media/Bs7lKLBKz7po6uMxUj/giphy.gif'
                    alt=''
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
