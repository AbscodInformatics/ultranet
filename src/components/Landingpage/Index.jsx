import React from 'react'
import HeroPage from "../HeroPage";
import Features from "../Features";
import Choose from "../Choose";
import Plan from "../Plan";
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