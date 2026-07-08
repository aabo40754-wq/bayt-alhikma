import { useState } from 'react'
import { IconLamp } from './icons'

const NAV = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#about', label: 'من نحن' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#books', label: 'إصداراتنا' },
  { href: '#contact', label: 'تواصل معنا' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand/95 backdrop-blur text-parchment shadow-lg shadow-black/10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex h-18 items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 bg-brand-dark">
              <IconLamp className="h-6 w-6 text-gold-light" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-lg font-bold text-parchment">بيت الحكمة</span>
              <span className="text-xs tracking-wide text-gold-light">للنشر والتوزيع</span>
            </span>
          </a>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-gold-light">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-gold px-5 py-2 text-sm font-bold text-brand-dark transition hover:bg-gold-light md:inline-block"
          >
            تواصل معنا
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-parchment/20 md:hidden"
            aria-label="فتح القائمة"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-xl leading-none">{open ? '×' : '☰'}</span>
          </button>
        </div>

        {open && (
          <nav className="border-t border-parchment/10 pb-4 md:hidden">
            <ul className="flex flex-col gap-1 pt-2 text-sm font-medium">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-2.5 hover:bg-brand-light"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
