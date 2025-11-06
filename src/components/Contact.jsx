import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in touch</h2>
        <p className="mt-3 text-gray-600">Questions about pairing, gifting, or bulk orders? We’re happy to help.</p>
      </div>

      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
            <input type="text" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none ring-rose-200 focus:ring" placeholder="Your name" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
            <input type="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none ring-rose-200 focus:ring" placeholder="you@example.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
            <textarea rows="4" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none ring-rose-200 focus:ring" placeholder="How can we help?" />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-xs text-gray-500">We usually reply within 24 hours.</p>
            <motion.button whileTap={{ scale: 0.98 }} className="rounded-full bg-rose-600 px-5 py-2.5 text-sm font-medium text-white shadow-rose-600/30 shadow-md transition hover:bg-rose-500">Send message</motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}
