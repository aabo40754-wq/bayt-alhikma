import { useState } from 'react'
import { IconMail, IconPhone, IconPin } from './icons'

const INFO = [
  { icon: IconPin, label: 'العنوان', value: 'الكويت - حولي - شارع المثنى - مجمع البدري - محل رقم 28' },
  { icon: IconPhone, label: 'الهاتف / واتساب', value: '+965 6552 7877' },
  { icon: IconMail, label: 'البريد الإلكتروني', value: 'alhekmah_house@hotmail.com' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-brand-dark py-20 text-parchment md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold text-gold-light">تواصل معنا</span>
          <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">نسعد بالتواصل معك</h2>
          <p className="mt-4 leading-7 text-parchment/75">
            سواء كنت كاتبًا يبحث عن ناشر، أو موزّعًا يرغب في شراكة، تواصل معنا وسنرد عليك في أقرب وقت.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2 flex flex-col gap-6">
            {INFO.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-gold-light">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm text-parchment/60">{label}</div>
                  <div className="font-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-3 grid gap-4 rounded-2xl bg-white/5 p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-parchment/75">
                  الاسم
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-parchment/20 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-gold-light"
                  placeholder="اسمك الكامل"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-parchment/75">
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-parchment/20 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-gold-light"
                  placeholder="example@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-parchment/75">
                الرسالة
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full resize-none rounded-lg border border-parchment/20 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-gold-light"
                placeholder="اكتب رسالتك هنا..."
              />
            </div>
            <button
              type="submit"
              className="justify-self-start rounded-full bg-gold px-7 py-2.5 text-sm font-bold text-brand-dark transition hover:bg-gold-light"
            >
              إرسال الرسالة
            </button>
            {sent && (
              <p className="text-sm text-gold-light">
                شكرًا لتواصلك معنا، سيتم الرد عليك في أقرب وقت ممكن.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
