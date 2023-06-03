import React from 'react'
import NavBar from "../NavBar";
import HeroPage from "../HeroPage";
import Features from "../Features";
import Choose from "../Choose";
import Plan from "../Plan";
import Footer from "../Footer";

const Index = () => {
  return (
    <div>
      <NavBar/>
      <HeroPage />
      <Features />
      <Choose />
      <Plan />
      <Footer />
    </div>
  );
}

export default Index