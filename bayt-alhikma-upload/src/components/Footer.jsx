import { IconLamp } from './icons'

const LINKS = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#about', label: 'من نحن' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#books', label: 'إصداراتنا' },
  { href: '#contact', label: 'تواصل معنا' },
]

const SOCIAL = ['فيسبوك', 'إنستغرام', 'تويتر']

export default function Footer() {
  return (
    <footer className="bg-brand text-parchment/80">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-brand-dark">
                <IconLamp className="h-5 w-5 text-gold-light" />
              </span>
              <span className="font-serif text-lg font-bold text-parchment">بيت الحكمة</span>
            </div>
            <p className="mt-4 text-sm leading-7">
              دار نشر وتوزيع تعنى بنشر المعرفة وإثراء المكتبة العربية بإصدارات نوعية.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-base font-bold text-parchment">روابط سريعة</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition hover:text-gold-light">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-bold text-parchment">تابعنا</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {SOCIAL.map((s) => (
                <li key={s}>
                  <a href="#" className="transition hover:text-gold-light">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-parchment/10 pt-6 text-center text-xs text-parchment/50">
          © {new Date().getFullYear()} بيت الحكمة للنشر والتوزيع. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  )
}
