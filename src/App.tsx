import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Reviews } from './components/Reviews'
import { TutorCTA } from './components/TutorCTA'
import { Footer } from './components/Footer'
import { ChatBox } from './components/ChatBox'

function App() {
  console.log('App is rendering!');
  console.log('ChatBox:', ChatBox);
  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      <main>
        <Hero />
        <Reviews />
        <TutorCTA />
      </main>
      <Footer />
      <ChatBox />
    </div>
  )
}

export default App