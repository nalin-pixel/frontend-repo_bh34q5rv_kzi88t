import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const products = [
  {
    name: 'Citrus Grove',
    note: 'Sparkling mandarin, neroli, white musk',
    price: '$98',
    badge: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Velvet Dawn',
    note: 'Peony, rose absolute, warm amber',
    price: '$112',
    badge: 'New',
    image:
      'https://images.unsplash.com/photo-1608571424772-c4d0b004f9ba?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Green Atelier',
    note: 'Fig leaf, petitgrain, cedarwood',
    price: '$105',
    badge: 'Editor’s Pick',
    image:
      'https://images.unsplash.com/photo-1615634260167-6dedb0cc2df6?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Collections() {
  return (
    <section id="collections" className="relative py-20 bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-emerald-950">Signature collection</h2>
            <p className="mt-2 text-emerald-900/70">Three moods, one story. Discover our most-loved scents.</p>
          </div>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-900/20 bg-white px-4 py-2 text-sm text-emerald-900 hover:bg-emerald-50">
            View all
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-3xl overflow-hidden border border-emerald-900/10 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3]">
                <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs text-emerald-900 border border-emerald-900/10">
                  <Star className="w-3.5 h-3.5" /> {p.badge}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-emerald-950">{p.name}</h3>
                  <div className="text-emerald-900/80">{p.price}</div>
                </div>
                <p className="mt-1 text-sm text-emerald-900/70">{p.note}</p>
                <button className="mt-4 w-full rounded-xl bg-emerald-900 text-white py-2.5 text-sm hover:bg-emerald-800 transition-colors">
                  Add to bag
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
