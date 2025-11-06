import { motion } from 'framer-motion';
import { Leaf, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-rose-50/60 to-white py-20">
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Small producers. Big character.</h2>
          <p className="mt-4 text-gray-600">
            We champion family-run vineyards and sustainable practices. Every bottle we stock tells a story—of terroir, tradition, and patience.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-rose-100 p-2 text-rose-700"><Leaf size={18} /></span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Sustainably curated</p>
                  <p className="text-sm text-gray-600">Low-intervention wines with honest character.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-amber-100 p-2 text-amber-700"><Sparkles size={18} /></span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Expertly selected</p>
                  <p className="text-sm text-gray-600">Tasted and rated by sommeliers and friends.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1459735022341-cf0cabb43513?q=80&w=1600&auto=format&fit=crop"
              alt="Wine cellar"
              className="h-80 w-full object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-600">
                From volcanic slopes to ocean-kissed hillsides, we source bottles that reflect their origin with clarity and depth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
