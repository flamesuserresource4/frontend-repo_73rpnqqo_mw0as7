import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import About from './components/About';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-gray-600 md:flex-row md:px-6">
        <p>© {new Date().getFullYear()} VinoVerde. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#top" className="hover:text-gray-900">Back to top</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
