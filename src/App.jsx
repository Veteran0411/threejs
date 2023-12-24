import { useState } from 'react'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { BrowserRouter } from 'react-router-dom';


const App = () => {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-fixed bg-no-repeat bg-center">  {/*tailwind.config,js */}
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Experience/>
        <Works/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
