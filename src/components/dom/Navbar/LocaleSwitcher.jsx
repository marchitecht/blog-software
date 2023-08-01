'use client'

import clsx from 'clsx'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client'
import { ChangeEvent, useTransition } from 'react'

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher')
  const [isPending, startTransition] = useTransition()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function onSelectChange(event) {
    const nextLocale = event.target.value
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <label className={clsx('relative text-gray-400  w-10 h-10  rounded-full ring-2 ring-green-600 ', isPending && 'transition-opacity [&:disabled]:opacity-30')}>
      <p className='sr-only'>{t('locale')}</p>
      <select
        className='inline-flex appearance-none bg-transparent py-1 '
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {['en', 'ru'].map((cur) => (
          <option key={cur} value={cur}>
            {t('locale', { locale: cur })}
          </option>
        ))}
      </select>
      <span className='pointer-events-none absolute top-[8px] right-2'></span>
    </label>
  )
}
