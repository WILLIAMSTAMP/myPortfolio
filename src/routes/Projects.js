import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import react from 'react'
import HeroImg2 from "../components/HeroImg2";
import PriceCards from "../components/PriceCards"
import Work from "../components/Work";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my recent work"/>
      <Work />
      <PriceCards />
      <Footer />
    </div>
  )
}

export default Projects