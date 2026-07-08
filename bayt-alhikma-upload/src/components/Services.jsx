import { IconBook, IconTruck, IconPen, IconGlobe } from './icons'

const SERVICES = [
  {
    icon: IconBook,
    title: 'النشر',
    text: 'نرافق الكاتب من المخطوطة الأولى إلى الكتاب المطبوع، عبر تحرير احترافي وإخراج فني متقن.',
  },
  {
    icon: IconTruck,
    title: 'التوزيع',
    text: 'شبكة توزيع تغطي المكتبات ومعارض الكتاب في مختلف الدول العربية.',
  },
  {
    icon: IconPen,
    title: 'التحرير والتدقيق',
    text: 'فريق من المحررين المتخصصين لضمان جودة اللغة والمحتوى قبل الطباعة.',
  },
  {
    icon: IconGlobe,
    title: 'حقوق الترجمة والنشر',
    text: 'نساعد الكتّاب على إبرام اتفاقيات النشر والترجمة وحماية حقوقهم الفكرية.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-parchment-dark/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold text-gold">خدماتنا</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            كل ما يحتاجه كتابك ليصل إلى القارئ
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gold/15 bg-parchment p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/10"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-gold-light transition group-hover:bg-gold group-hover:text-brand-dark">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-bold text-brand-dark">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-ink/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
