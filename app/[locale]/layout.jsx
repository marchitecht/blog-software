import { Layout } from '@/components/dom/Layout'
import Navbar from '@/components/dom/Navbar/Navbar'
import Navbar1 from '@/components/dom/Navbar/Navbar1'
import '@/global.css'
import { createTranslator, NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import Head from './head'

// export function generateStaticParams() {
//   return [{ locale: 'en' }, { locale: 'ru' }]
// }

// export const metadata = {
//   title: 'Next.js + Three.js',
//   description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
// }
// type Props = {
//   children: ReactNode
//   params: { locale: string }
// }
async function getMessages(locale) {
  try {
    return (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages(locale)

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({ locale, messages })

  return {
    heading: t('Index.heading'),
    // paragraph: t('Index.paragraph'),
    // contact: t('Index.contact'),
    // title: t('Index.title'),
    // description: t('Index.description'),
  }
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <head />
      {/* will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head */}
      <Head />
      <head />
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
      </body>
    </html>
  )
}
