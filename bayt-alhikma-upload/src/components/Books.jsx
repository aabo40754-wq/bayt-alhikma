
import { useMemo, useState } from 'react'
import books from '../data/books.json'
import { IconBook } from './icons'
import { useCart } from '../context/CartContext'

const CATEGORIES = [
  { key: 'الكل', label: 'الكل' },
  { key: 'جديد', label: 'الجديد' },
  { key: 'نادر', label: 'النوادر' },
  { key: 'مستعمل', label: 'المستعمل' },
  { key: 'مخفض', label: 'المخفض' },
]

const available = books.filter((b) => b.status === 'متوفر' || !b.status)

export default function Books() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('الكل')
  const { addItem } = useCart()

  const results = useMemo(() => {
    let list = available
    if (category !== 'الكل') {
      list = list.filter((b) => b.category === category)
    }
    const q = query.trim()
    if (q) {
      list = list.filter(
        (b) => b.title.includes(q) || b.author.includes(q) || b.publisher.includes(q)
      )
    }
    return list.slice(0, 24)
  }, [category, query])

  return (
    <section id="books" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold text-gold">المتجر</span>
        <h2 className="mt-2 font-serif text-3xl font-bold text-brand-dark md:text-4xl">
          تصفح إصداراتنا
        </h2>
        <p className="mt-4 leading-7 text-ink/70">
          مكتبتنا تضم أكثر من {books.length} عنوانًا، ابحث أو اختر قسمًا لتصفح ما يناسبك.
        </p>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث باسم الكتاب أو المؤلف أو دار النشر..."
          className="mt-6 w-full rounded-full border border-brand/20 bg-parchment-dark/40 px-6 py-3 text-sm outline-none focus:border-brand"
        />
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setCategory(c.key)}
            className={`rounded-full border px-5 py-2 text-sm font-bold transition ${
              category === c.key
                ? 'border-brand bg-brand text-parchment'
                : 'border-brand/20 text-brand hover:bg-brand/10'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {results.length === 0 ? (
        <p className="mt-14 text-center text-ink/60">لا توجد نتائج مطابقة.</p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((book) => (
            <div
              key={book.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-gold/15 bg-parchment shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-parchment-dark">
                {book.image ? (
                  <img
                    src={book.image}
                    alt={book.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-brand/25">
                    <IconBook className="h-12 w-12" />
                  </div>
                )}
                {book.category === 'مخفض' && (
                  <span className="absolute right-2 top-2 rounded-full bg-red-700 px-2.5 py-1 text-xs font-bold text-white">
                    خصم
                  </span>
                )}
                {book.category === 'نادر' && (
                  <span className="absolute right-2 top-2 rounded-full bg-gold px-2.5 py-1 text-xs font-bold text-brand-dark">
                    نادر
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="line-clamp-2 font-serif text-sm font-bold leading-snug text-brand-dark">
                  {book.title}
                </h3>
                <p className="mt-1 text-xs text-ink/60">{book.author}</p>
                <div className="mt-auto flex items-center justify-between pt-3">
                  <span className="text-sm font-bold text-gold">
                    {book.price ? `${book.price} ر.س` : 'السعر عند الطلب'}
                  </span>
                  <button
                    type="button"
                    onClick={() => addItem(book)}
                    className="rounded-full bg-brand px-3 py-1.5 text-xs font-bold text-parchment transition hover:bg-brand-light"
                  >
                    أضف للسلة
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}