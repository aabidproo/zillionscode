import React from "react";
import { Company, Cta, Footer, Hero, Navbar, Approach, Overview, Solutions, Stories, Testimonial, Tech } from './components';
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Company />
      <Approach />
      <Testimonial />
      <Overview />
      <Solutions />
      <Tech />
      <Stories />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
