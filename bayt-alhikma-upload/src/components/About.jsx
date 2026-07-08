const VALUES = [
  {
    title: 'الجودة',
    text: 'نلتزم بأعلى معايير التحرير والتدقيق والإخراج الفني في كل إصدار.',
  },
  {
    title: 'الأمانة العلمية',
    text: 'نحترم حقوق المؤلفين والملكية الفكرية في كل مراحل النشر والتوزيع.',
  },
  {
    title: 'الانتشار',
    text: 'شبكة توزيع واسعة تصل بإصداراتنا إلى المكتبات والمعارض في الوطن العربي.',
  },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-sm font-bold text-gold">من نحن</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            نبني جسرًا بين الكاتب والقارئ
          </h2>
          <p className="mt-5 leading-8 text-ink/80">
            تأسست "بيت الحكمة للنشر والتوزيع" برؤية واضحة: أن تكون بيتًا حقيقيًا للكلمة، يحتضن
            المؤلفين ويوصل إبداعهم إلى القراء في كل مكان. نعمل منذ سنوات على نشر الكتب الفكرية
            والأدبية والعلمية، وتوزيعها عبر شبكة من المكتبات ودور العرض داخل الوطن العربي وخارجه،
            مؤمنين بأن المعرفة استثمار لا ينضب.
          </p>
          <p className="mt-4 leading-8 text-ink/80">
            نفخر بشراكتنا مع نخبة من الكتّاب والمترجمين، ونسعى دائمًا لتقديم إصدارات تجمع بين
            الأصالة في المحتوى والاحترافية في الصناعة.
          </p>
        </div>

        <div className="grid gap-5">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-gold/20 bg-parchment-dark/60 p-6 shadow-sm"
            >
              <h3 className="font-serif text-lg font-bold text-brand">{v.title}</h3>
              <p className="mt-2 text-sm leading-7 text-ink/75">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
