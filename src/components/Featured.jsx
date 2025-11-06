import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Barolo Riserva 2016',
    region: 'Piedmont, Italy',
    price: 89,
    image: 'https://images.unsplash.com/photo-1511723691136-cad3c82dd092?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYXJvbG8lMjBSaXNlcnZhJTIwMjAxNnxlbnwwfDB8fHwxNzYyNDUzMjYzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Sancerre Blanc 2020',
    region: 'Loire, France',
    price: 42,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Rioja Gran Reserva 2014',
    region: 'Rioja, Spain',
    price: 59,
    image: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Champagne Brut NV',
    region: 'Reims, France',
    price: 75,
    image: 'https://images.unsplash.com/photo-1622509761160-2bbfbcd4d803?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGFtcGFnbmUlMjBCcnV0JTIwTlZ8ZW58MHwwfHx8MTc2MjQ1MzI2NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function Featured() {
  return (
    <section id="featured" className="relative mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Bottles</h2>
        <p className="mt-3 text-gray-600">Curated by sommeliers—limited releases and crowd favorites with expressive character.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, idx) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.05 }}
            className="group rounded-2xl border border-gray-100 bg-white p-3 shadow-sm ring-1 ring-transparent transition hover:-translate-y-1 hover:shadow-lg hover:ring-rose-100"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
              <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition group-hover:opacity-100"></div>
            </div>
            <div className="p-3">
              <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.region}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-base font-semibold text-gray-900">${p.price}</span>
                <button className="rounded-full bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-rose-600/30 shadow-md transition hover:bg-rose-500">Add to cart</button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
