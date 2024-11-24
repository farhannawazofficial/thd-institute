import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Tracks from "./components/Tracks";
import PremiumExperience from "./components/PremiumExperience";
import Testimonials from "./components/Testimonials";
import OurTracks from "./components/OurTracks";
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Tracks />
      <PremiumExperience />
      <Testimonials />
      <OurTracks />
      <Footer />
      {/* Add other sections if necessary */}
    </div>
  );
}

export default App;
