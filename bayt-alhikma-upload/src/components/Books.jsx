const BOOKS = [
  { title: 'ظلال المعنى', author: 'أحمد الفاسي', category: 'رواية', color: 'from-brand to-brand-light' },
  { title: 'مسارات الفكر', author: 'د. ليلى حمدان', category: 'فكر وفلسفة', color: 'from-[#7a3b12] to-[#a8551c]' },
  { title: 'ضوء في الذاكرة', author: 'منى العبدالله', category: 'شعر', color: 'from-[#5c1a4a] to-[#8a2d6e]' },
  { title: 'خرائط الحكمة', author: 'د. يوسف الشامي', category: 'تاريخ', color: 'from-[#0b3d59] to-[#155e82]' },
]

export default function Books() {
  return (
    <section id="books" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold text-gold">إصداراتنا</span>
        <h2 className="mt-2 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
          نخبة من أحدث الإصدارات
        </h2>
        <p className="mt-4 leading-7 text-ink/70">
          مجموعة مختارة من الأعمال التي أصدرناها مؤخرًا في الرواية والفكر والشعر والتاريخ.
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {BOOKS.map((book) => (
          <div key={book.title} className="group">
            <div
              className={`relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br p-5 text-parchment shadow-md transition group-hover:-translate-y-1.5 group-hover:shadow-xl ${book.color}`}
            >
              <span className="self-start rounded-full bg-black/25 px-3 py-1 text-xs font-medium">
                {book.category}
              </span>
              <div>
                <h3 className="font-serif text-xl font-bold leading-snug">{book.title}</h3>
                <p className="mt-1 text-sm text-parchment/80">{book.author}</p>
              </div>
              <span className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full bg-white/10" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#contact"
          className="inline-block rounded-full border border-brand px-7 py-3 text-sm font-bold text-brand transition hover:bg-brand hover:text-parchment"
        >
          للاستفسار عن كامل الإصدارات
        </a>
      </div>
    </section>
  )
}
