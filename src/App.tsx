import { Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Reviews } from './components/Reviews'
import { TutorCTA } from './components/TutorCTA'
import { Footer } from './components/Footer'
import { ChatBox } from './components/ChatBox'
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import SignUpAsTutor from "./components/SignUpAsTutor";
import LearnMore from "./components/LearnMore";
import { FindATutor } from "./components/FindATutor";
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
          <Route path="/signup-as-tutor" element={<SignUpAsTutor />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/find-a-tutor" element={<FindATutor />} />
        </Routes>
      </main>

      <Footer />
      <ChatBox />
    </div>
  )
}

export default App