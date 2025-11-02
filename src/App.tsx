import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Reviews } from './components/Reviews'
import { TutorCTA } from './components/TutorCTA'
import { Footer } from './components/Footer'
import { ChatBox } from './components/ChatBox'
import { useEffect } from 'react'
import axios from 'axios'


function App() {
  useEffect(() => {
    axios.get("api/")
    .then((response) => {
      console.log(response.data)
    }) 
  }, [])
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