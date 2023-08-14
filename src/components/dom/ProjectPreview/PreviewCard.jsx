import cls from './PreviewCard.module.scss'

export default function PreviewCard({ description, name, link, button }) {
  return (
    <article className={cls.article}>
      <div className={cls.articleContent}>
        <a className={cls.blogTitle}>{name}</a>
        <div className={cls.preview}>
          <p>{description}</p>
        </div>
      </div>
      <a className={cls.readMore} href={link}>
        {button}
      </a>
    </article>
  )
}
