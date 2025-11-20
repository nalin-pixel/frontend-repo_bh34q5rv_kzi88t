export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-emerald-900/10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-emerald-950">Saramea</h3>
            <p className="mt-2 text-sm text-emerald-900/70">Perfume, playfully crafted in small batches.</p>
          </div>
          <div>
            <h4 className="font-medium text-emerald-950">Newsletter</h4>
            <div className="mt-2 flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-emerald-900/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
              <button className="rounded-xl bg-emerald-900 text-white px-4 py-2 text-sm hover:bg-emerald-800">Join</button>
            </div>
          </div>
          <div className="text-sm text-emerald-900/70">
            <div>© {new Date().getFullYear()} Saramea</div>
            <div className="mt-2">Instagram • TikTok • Pinterest</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
