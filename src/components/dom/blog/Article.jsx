'use client'

import cls from './Article.module.scss'
import clss from './Mobile.module.scss'
import useWindowSize from '@/utils/hooks/use-windows-size'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'
import UploadcareImage from '@uploadcare/nextjs-loader'

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
                      <UploadcareImage width={80} height={80} className={cls['image']} src='/marchitecht.jpg' alt='' />
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
              {/* <a className={cls['link_link']} href='/blog/category/engineering'> */}
              <div className={`${cls['article-layout_pill']} ${cls['article-layout_pillGradientBackground']}`}>
                <p className={cls['text_wrapper']}> {tLocal('badge')}</p>
              </div>
              {/* </a> */}
              <p className={cls['text_wrapper']} style={{ color: '#a1a1a1' }}>
                {/* Friday October 21st 2022 */}
                {tLocal('date')}
              </p>
            </div>
            <h2 className={cls['article-layout_title']}>
              <span className={cls['title']} style={{ display: 'inline-block', verticalAlign: 'top' }}>
                {tLocal('title')}
              </span>
            </h2>
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
                    <video
                      className='w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700 mt-8 '
                      src='/dp.mp4'
                      alt=''
                      loop
                      autoPlay
                      muted
                      width={80}
                      height={80}
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
                {path === 'event-loop' && (
                  <div className='p-2 mb-4'>
                    <p className={cls['post-content']}>{tLocal('postContent1')}</p>
                    <p className={cls['post-content']}>{tLocal('postContent2')}</p>
                    <hr style={{ borderTop: '1px solid gray', margin: '50px 0' }} />
                    <h2 className={cls['paragraph-header']}>{tLocal('heading2')}</h2>
                    <p className={cls['post-content']}>{tLocal('postContent3')}</p>

                    <p className={cls['post-content']}>{tLocal('postContent4')}</p>

                    <h2 className={cls['paragraph-header']}>{tLocal('heading3')}</h2>
                    <p className={cls['post-content']}>{tLocal('postContent5')}</p>
                    <UploadcareImage
                      width={80}
                      height={80}
                      className='w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700 mt-8 '
                      src='https://ucarecdn.com/05b23af1-c859-49a4-9936-406eb04f8c43/'
                      alt=''
                      width={30}
                      height={30}
                    />
                    <p className={cls['post-content']}>{tLocal('postContent6')}</p>
                    <SyntaxHighlighter language='javascript' style={nightOwl}>
                      {data.codestring1}
                    </SyntaxHighlighter>
                    <p className={cls['post-content']}>{tLocal('postContent7')}</p>
                    <SyntaxHighlighter language='javascript' style={nightOwl}>
                      {data.codestring2}
                    </SyntaxHighlighter>
                    <UploadcareImage
                      className='w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700 mt-8 '
                      src='https://ucarecdn.com/20ef0d7e-6cb6-4694-90f8-2be3fb9ce4fd/'
                      alt=''
                      width={30}
                      height={30}
                    />
                    <p className={cls['post-content']}>{tLocal('postContent8')}</p>
                    <p className={cls['post-content']}>{tLocal('postContent9')}</p>
                    <img
                      className='w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700 mt-8 '
                      src='https://ucarecdn.com/e1eeb336-aad8-42b0-aed3-209916266ef2/'
                      alt=''
                      width={30}
                      height={30}
                    />

                    <h2 className={cls['paragraph-header']}>{tLocal('heading4')}</h2>
                    <p className={cls['post-content']}>{tLocal('postContent10')}</p>
                    <SyntaxHighlighter language='javascript' style={nightOwl}>
                      {data.codestring3}
                    </SyntaxHighlighter>
                    <p className={cls['post-content']}>{tLocal('postContent11')}</p>
                    <p className={cls['post-content']}>{tLocal('postContent12')}</p>
                    <h2 className={cls['paragraph-header']}>{tLocal('heading5')}</h2>
                    <p className={cls['post-content']}>{tLocal('postContent13')}</p>
                    <h2 className={cls['paragraph-header']}>{tLocal('heading6')}</h2>
                    <p className={cls['post-content']}>{tLocal('postContent14')}</p>
                    <p className={cls['post-content']}>{tLocal('postContent15')}</p>
                    <p className={cls['post-content']}>{tLocal('postContent16')}</p>
                    <p className={cls['post-content']}>{tLocal('postContent17')}</p>
                    <p className={cls['post-content']}>{tLocal('postContent18')}</p>
                    <p className={cls['post-content']}>{tLocal('postContent19')}</p>
                    <p className={cls['post-content']}>{tLocal('postContent20')}</p>
                    <p className={cls['post-content']}>{tLocal('postContent21')}</p>
                    <UploadcareImage
                      className='w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700 mt-8 '
                      src='https://ucarecdn.com/58b17d67-ec44-476a-82ef-31d0e87d4985/'
                      alt=''
                      width={30}
                      height={30}
                    />
                    <p className={cls['post-content']}>{tLocal('postContent22')}</p>
                    <p className={cls['post-content']}>{tLocal('postContent23')}</p>
                    <h2 className={cls['paragraph-header']}>{tLocal('heading7')}</h2>
                    <p className={cls['post-content']}>{tLocal('postContent24')}</p>
                    <UploadcareImage
                      className='w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700 mt-8 '
                      src='https://ucarecdn.com/21f3fb0f-a09a-4fc2-bbf2-bbb8757a98c2/'
                      alt=''
                      width={30}
                      height={30}
                    />
                    <p className={cls['post-content']}>{tLocal('postContent25')}</p>
                    <p className={cls['post-content']}>{tLocal('postContent26')}</p>
                    <p className={cls['post-content']}>{tLocal('postContent27')}</p>
                    <p className={cls['post-content']}>{tLocal('postContent28')}</p>
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
                      <UploadcareImage className={cls['image']} src='/marchitecht.jpg' alt='' width={80} height={80} />
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
                <div className='p-2 mb-24'>
                  <p className={cls['post-content']}>{tLocal('postContent1')}</p>
                  <p className={cls['post-content']}>{tLocal('postContent2')}</p>
                  <hr style={{ borderTop: '1px solid gray', margin: '50px 0' }} />
                  <h2 className={cls['paragraph-header']}>{tLocal('heading2')}</h2>
                  <UploadcareImage
                    className='w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700 mt-4 mb-4'
                    src='https://media.giphy.com/media/Bs7lKLBKz7po6uMxUj/giphy.gif'
                    alt=''
                    width={80}
                    height={80}
                  />
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
                </div>
              )}
              {path === 'event-loop' && (
                <div className='p-2 mb-4'>
                  <p className={cls['post-content']}>{tLocal('postContent1')}</p>
                  <p className={cls['post-content']}>{tLocal('postContent2')}</p>
                  <hr style={{ borderTop: '1px solid gray', margin: '50px 0' }} />
                  <h2 className={cls['paragraph-header']}>{tLocal('heading2')}</h2>
                  <p className={cls['post-content']}>{tLocal('postContent3')}</p>
                  <UploadcareImage
                    width={80}
                    height={80}
                    className='w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700 mt-8 '
                    src='https://ucarecdn.com/05b23af1-c859-49a4-9936-406eb04f8c43/'
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
        </section>
      )}
    </>
  )
}
