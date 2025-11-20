import { motion } from 'framer-motion'

export default function Story() {
  return (
    <section id="story" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-emerald-900/10 bg-white shadow-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
              alt="Studio"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <h2 className="text-3xl md:text-4xl font-serif text-emerald-950">Rooted in slow craft</h2>
            <p className="mt-4 text-emerald-900/80">
              Saramea was born from weekend experiments and a love for old-world perfumery. We blend modern minimalism with vintage romance to create scents that feel like memories—familiar, warm, and slightly playful.
            </p>
            <p className="mt-3 text-emerald-900/80">
              Each bottle is small-batch filled, vegan, and free from parabens and phthalates. We partner with local growers for ethically sourced botanicals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
