import { useState } from 'react'
import { Menu, X, ShoppingBag, Leaf } from 'lucide-react'

function NavLink({ children, href = '#' }) {
  return (
    <a href={href} className="text-sm md:text-base text-emerald-900/80 hover:text-emerald-900 transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-5 backdrop-blur-xl bg-white/60 border border-emerald-900/10 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-200 via-rose-100 to-emerald-100 grid place-items-center border border-emerald-900/10">
                <Leaf className="w-5 h-5 text-emerald-700" />
              </div>
              <span className="font-semibold tracking-wide text-emerald-900 text-lg">Saramea</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#collections">Collections</NavLink>
              <NavLink href="#story">Our Story</NavLink>
              <NavLink href="#ingredients">Ingredients</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-emerald-900 text-white px-4 py-2 text-sm hover:bg-emerald-800 transition-colors">
                <ShoppingBag className="w-4 h-4" /> Shop
              </button>
            </div>

            <button className="md:hidden p-2 rounded-lg hover:bg-emerald-900/5" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X className="w-6 h-6 text-emerald-900" /> : <Menu className="w-6 h-6 text-emerald-900" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-3">
                <NavLink href="#collections">Collections</NavLink>
                <NavLink href="#story">Our Story</NavLink>
                <NavLink href="#ingredients">Ingredients</NavLink>
                <NavLink href="#contact">Contact</NavLink>
                <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-900 text-white px-4 py-2 text-sm hover:bg-emerald-800 transition-colors">
                  <ShoppingBag className="w-4 h-4" /> Shop
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
