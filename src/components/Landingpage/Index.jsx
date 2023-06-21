import React from 'react'
import HeroPage from "../HeroPage";
import Features from "../Features";
import Choose from "../Choose";
import Plan from "../Plan";
import PlanFilter from '../Home/PlanFilter';
// import UltranetWork from '../UltranetWork';
import Products from "../Partners"
const Index = () => {
  return (
    <div>
      <HeroPage />
      <Features />
      <Products />
      {/* <UltranetWork/> */}
      <Choose />
      <PlanFilter/>
      <Plan />
    </div>
  );
}

export default Index