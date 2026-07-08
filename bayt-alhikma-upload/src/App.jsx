import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Books from './components/Books'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-parchment font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Books />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
