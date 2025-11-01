import { Navbar } from '../src/components/Navbar'
import { Hero } from './components/Hero'
import { Reviews } from '../src/components/Reviews'
import { TutorCTA } from './components/TutorCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      <main>
        <Hero />
        <Reviews />
        <TutorCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
