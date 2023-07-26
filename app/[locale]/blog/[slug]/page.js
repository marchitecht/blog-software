import Article from '@/components/dom/blog/Article'

const { dataBlog } = require('@/utils/data/blog/dp')

export async function generateStaticParams() {
  const posts = dataBlog
  return posts.map((post) => ({
    slug: post.path,
  }))
}

export default function Page({ params }) {
  const { slug } = params
  const data = dataBlog.filter((item) => item.path === slug)
  return (
    <>
      <Article data={data} />
    </>
  )
}