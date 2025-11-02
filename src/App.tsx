import { Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Reviews } from './components/Reviews'
import { TutorCTA } from './components/TutorCTA'
import { Footer } from './components/Footer'
import { ChatBox } from './components/ChatBox'
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

function App() {
  console.log('App is rendering!');
  console.log('ChatBox:', ChatBox);
  return (
    <div className="min-vh-100 bg-light">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Reviews />
              <TutorCTA />
            </>
          }/>
          
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </main>

      <Footer />
      <ChatBox />
    </div>
  )
}

export default App