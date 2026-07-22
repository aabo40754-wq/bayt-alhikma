import { useCart } from '../context/CartContext'

const WHATSAPP_NUMBER = '96565527877'

export default function Cart() {
  const { items, removeItem, updateQty, total, open, setOpen } = useCart()

  if (!open) return null

  const lines = items.map(
    (i) =>
      `- ${i.title} (${i.author}) × ${i.qty}${i.price ? ` — ${i.price * i.qty} ر.س` : ''}`
  )
  const orderText = encodeURIComponent(
    `السلام عليكم، أرغب بطلب الكتب التالية من بيت الحكمة:\n\n${lines.join('\n')}\n\nالإجمالي: ${total} ر.س`
  )

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
      <div className="relative flex h-full w-full max-w-md flex-col bg-parchment shadow-2xl">
        <div className="flex items-center justify-between border-b border-gold/20 p-5">
          <h2 className="font-serif text-lg font-bold text-brand-dark">سلة المشتريات</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-2xl leading-none text-ink/60 hover:text-ink"
            aria-label="إغلاق السلة"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <p className="mt-10 text-center text-ink/60">السلة فارغة</p>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 border-b border-gold/10 pb-4">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt=""
                      className="h-20 w-14 shrink-0 rounded object-cover bg-parchment-dark"
                    />
                  ) : (
                    <div className="h-20 w-14 shrink-0 rounded bg-parchment-dark" />
                  )}
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-bold text-brand-dark">{item.title}</h3>
                    <p className="text-xs text-ink/60">{item.author}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="h-6 w-6 rounded border border-gold/30 text-sm"
                      >
                        -
                      </button>
                      <span className="text-sm">{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="h-6 w-6 rounded border border-gold/30 text-sm"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="ms-auto text-xs text-red-700 hover:underline"
                      >
                        حذف
                      </button>
                    </div>
                  </div>
                  <div className="shrink-0 text-sm font-bold text-gold">
                    {item.price ? `${item.price * item.qty} ر.س` : '—'}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gold/20 p-5">
            <div className="mb-4 flex justify-between text-sm font-bold text-ink">
              <span>الإجمالي</span>
              <span className="text-gold">{total} ر.س</span>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${orderText}`}
              target="_blank"
              rel="noreferrer"
              className="block rounded-full bg-brand py-3 text-center text-sm font-bold text-parchment transition hover:bg-brand-light"
            >
              إتمام الطلب عبر واتساب
            </a>
          </div>
        )}
      </div>
    </div>
  )
}