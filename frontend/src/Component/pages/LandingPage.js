import React, {useState} from 'react'
import About from '../LandingPage/About/About';
import Footer from '../LandingPage/Footer/Footer';
import HomeSection from '../LandingPage/HomeSection';
import Navbar from '../LandingPage/Navbar';
import { homeObjOne } from '../LandingPage/NetBanking/Data';
import NetBanking from '../LandingPage/NetBanking/NetBanking';
import SideBar from '../LandingPage/SideBar';
import Services from '../LandingPage/Services';

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <SideBar isOpen= {isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HomeSection />
      <NetBanking {...homeObjOne} />
      <Services />
      <About />
      <Footer />
    </div>
  )
}

export default LandingPage;