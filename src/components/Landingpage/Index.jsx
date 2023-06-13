import React from 'react'
import NavBar from "../NavBar";
import HeroPage from "../HeroPage";
import Features from "../Features";
import Choose from "../Choose";
import Plan from "../Plan";
import Footer from "../Footer";
import UltranetWork from '../UltranetWork';
const Index = () => {
  return (
    <div>
      <HeroPage />
      <Features />
      <UltranetWork/>
      <Choose />
      <Plan />
    </div>
  );
}

export default Index