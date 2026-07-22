import { useState } from 'react'
import { IconLamp, IconCart } from './icons'
import { useCart } from '../context/CartContext'

const NAV = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#books', label: 'الجديد' },
  { href: '#books', label: 'النوادر' },
  { href: '#books', label: 'المستعمل' },
  { href: '#books', label: 'المخفض' },
  { href: '#contact', label: 'تواصل معنا' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { count, setOpen: setCartOpen } = useCart()

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
            <ul className="flex items-center gap-6 text-sm font-medium">
              {NAV.map((item, i) => (
                <li key={item.label + i}>
                  <a href={item.href} className="transition-colors hover:text-gold-light">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-parchment/20 transition hover:bg-white/10"
              aria-label="سلة المشتريات"
            >
              <IconCart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-1.5 -left-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-brand-dark">
                  {count}
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-parchment/20"
              aria-label="سلة المشتريات"
            >
              <IconCart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-1.5 -left-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-brand-dark">
                  {count}
                </span>
              )}
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-parchment/20"
              aria-label="فتح القائمة"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="text-xl leading-none">{open ? '×' : '☰'}</span>
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-parchment/10 pb-4 md:hidden">
            <ul className="flex flex-col gap-1 pt-2 text-sm font-medium">
              {NAV.map((item, i) => (
                <li key={item.label + i}>
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