import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Instagram from './components/Instagram'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-forest-800 focus:px-5 focus:py-3 focus:text-cream-50"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Testimonials />
        <Gallery />
        <Instagram />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
