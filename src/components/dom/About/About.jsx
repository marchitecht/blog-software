'use client'
import { useTranslations } from 'next-intl'
import cls from './About.module.scss'
export default function About() {
  const t = useTranslations('About')

  return (
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
          <h2 className={cls['article-layout_title']}>
            <span className={cls['title']} style={{ display: 'inline-block', verticalAlign: 'top' }}>
              {/* {tLocal('title')} */}
              Software engineer
            </span>
          </h2>
          <p className={cls['article-layout_subtitle']}>
            <span className={cls['subtitle']}>
                {/* {tLocal('subtitle')} */}
                Bulding software
                </span>
          </p>
        </div>
      </div>
    </section>
  )
}
