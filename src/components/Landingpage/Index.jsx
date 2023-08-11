import React from 'react'
import HeroPage from "../HeroPage";
import Features from "../Features";
import Choose from "../Choose";
import Plan from "../Plan";
import PlanFilter from '../Home/PlanFilter';
// import UltranetWork from '../UltranetWork';
import Products from "../Partners"
import HeroPage1 from "./HeroPage"
import Form from '../Form';
const Index = () => {
  return (
    <div>
      {" "}
      <Form />
      <HeroPage1 />
      {/* <HeroPage /> */}
      <Features />
      <Products />
      {/* <UltranetWork/> */}
      <Choose />
      <PlanFilter />
      <Plan />
    </div>
  );
}

export default Index