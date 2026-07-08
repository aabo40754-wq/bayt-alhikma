const STATS = [
  { value: '+300', label: 'عنوان منشور' },
  { value: '+150', label: 'كاتب وكاتبة' },
  { value: '18', label: 'عامًا من الخبرة' },
  { value: '+40', label: 'موزّعًا وشريكًا' },
]

export default function Stats() {
  return (
    <section className="border-y border-gold/15 bg-brand text-parchment">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 text-center md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="font-serif text-3xl font-bold text-gold-light md:text-4xl">{s.value}</div>
            <div className="mt-1 text-sm text-parchment/75">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
