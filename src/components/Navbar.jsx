import { useState, useEffect } from 'react';
import { Wine, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'} `}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <button onClick={() => handleNav('top')} className="group inline-flex items-center gap-2">
          <div className="rounded-xl bg-rose-100 p-2 text-rose-600 transition group-hover:scale-110">
            <Wine size={20} />
          </div>
          <span className="text-lg font-semibold tracking-tight">VinoVerde</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <button onClick={() => handleNav('featured')} className="text-sm text-gray-700 transition hover:text-rose-600">Featured</button>
          <button onClick={() => handleNav('about')} className="text-sm text-gray-700 transition hover:text-rose-600">About</button>
          <button onClick={() => handleNav('contact')} className="text-sm text-gray-700 transition hover:text-rose-600">Contact</button>
          <button className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-rose-600/30 shadow-lg transition hover:bg-rose-500">
            <ShoppingBag size={16} /> Shop
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle menu">
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-gray-800 transition ${open ? 'translate-y-1.5 rotate-45' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-800 transition ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-800 transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden">
          <div className="space-y-2 border-t bg-white/80 px-4 py-4 backdrop-blur">
            <button onClick={() => handleNav('featured')} className="block w-full rounded-md px-2 py-2 text-left text-gray-800 hover:bg-rose-50">Featured</button>
            <button onClick={() => handleNav('about')} className="block w-full rounded-md px-2 py-2 text-left text-gray-800 hover:bg-rose-50">About</button>
            <button onClick={() => handleNav('contact')} className="block w-full rounded-md px-2 py-2 text-left text-gray-800 hover:bg-rose-50">Contact</button>
            <button className="mt-2 inline-flex items-center gap-2 rounded-full bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-rose-600/30 shadow-lg transition hover:bg-rose-500">
              <ShoppingBag size={16} /> Shop
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
