import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
