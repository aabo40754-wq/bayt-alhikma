import { IconBook } from './icons'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-dark text-parchment">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--color-gold-light) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-10 h-56 w-56 rounded-full bg-brand-light/40 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-24 text-center md:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-sm text-gold-light">
          <IconBook className="h-4 w-4" />
          دار نشر وتوزيع تأسست لخدمة الكلمة والمعرفة
        </span>

        <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight md:text-6xl">
          بيت الحكمة
          <span className="mt-2 block text-2xl font-sans font-medium text-gold-light md:text-3xl">
            للنشر والتوزيع
          </span>
        </h1>

        <p className="max-w-2xl text-base leading-8 text-parchment/85 md:text-lg">
          ننشر المعرفة ونوزّع الحكمة. نرافق الكاتب من فكرته الأولى حتى وصول كتابه إلى يد القارئ،
          ونعمل على إثراء المكتبة العربية بإصدارات نوعية في مختلف المجالات.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#books"
            className="rounded-full bg-gold px-7 py-3 text-sm font-bold text-brand-dark shadow-lg shadow-black/20 transition hover:bg-gold-light"
          >
            تصفح إصداراتنا
          </a>
          <a
            href="#contact"
            className="rounded-full border border-parchment/30 px-7 py-3 text-sm font-bold text-parchment transition hover:bg-white/10"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  )
}
