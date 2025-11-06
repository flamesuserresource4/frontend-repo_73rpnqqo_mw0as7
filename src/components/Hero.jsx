import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/aqsFccgTYnL3w2D8/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/60 to-white"></div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 text-center md:px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 inline-block rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700"
        >
          Handpicked European Wines
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
        >
          Elevate your evenings with VinoVerde
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 max-w-2xl text-balance text-base text-gray-600 sm:text-lg"
        >
          A refined selection of reds, whites, and sparkling wines. Delivered with care and paired with stories of origin and terroir.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#featured" className="rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg transition hover:bg-gray-800">Shop Featured</a>
          <a href="#about" className="rounded-full bg-white/80 px-6 py-3 text-gray-900 ring-1 ring-gray-200 backdrop-blur transition hover:bg-white">Learn More</a>
        </motion.div>
      </div>
    </section>
  );
}
