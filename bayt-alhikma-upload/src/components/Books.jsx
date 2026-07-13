import { useMemo, useState } from 'react'
import books from '../data/books.json'

const CARD_STYLES = [
  'from-brand to-brand-light',
  'from-[#7a3b12] to-[#a8551c]',
  'from-[#5c1a4a] to-[#8a2d6e]',
  'from-[#0b3d59] to-[#155e82]',
]

const available = books.filter((b) => b.status === 'متوفر' || !b.status)

export default function Books() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim()
    if (!q) return available.slice(0, 8)
    return available
      .filter(
        (b) => b.title.includes(q) || b.author.includes(q) || b.publisher.includes(q)
      )
      .slice(0, 24)
  }, [query])

  return (
    <section id="books" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold text-gold">إصداراتنا</span>
        <h2 className="mt-2 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
          نخبة من إصداراتنا
        </h2>
        <p className="mt-4 leading-7 text-ink/70">
          تصفح مكتبتنا التي تضم أكثر من {books.length} عنوانًا، أو ابحث باسم الكتاب أو المؤلف أو دار النشر.
        </p>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث باسم الكتاب أو المؤلف أو دار النشر..."
          className="mt-6 w-full rounded-full border border-brand/20 bg-parchment-dark/40 px-6 py-3 text-sm outline-none focus:border-brand"
        />
      </div>

      {results.length === 0 ? (
        <p className="mt-14 text-center text-ink/60">لا توجد نتائج مطابقة لبحثك.</p>
      ) : (
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((book, i) => (
            <div key={book.id} className="group">
              <div
                className={`relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br p-5 text-parchment shadow-md transition group-hover:-translate-y-1.5 group-hover:shadow-xl ${CARD_STYLES[i % CARD_STYLES.length]}`}
              >
                <span className="self-start rounded-full bg-black/25 px-3 py-1 text-xs font-medium">
                  {book.publisher || 'بيت الحكمة'}
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
      )}

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
