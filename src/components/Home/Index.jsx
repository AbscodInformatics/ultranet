import React from 'react'
import NavBar from '../NavBar';
import Home from './Home'
import PlanFilter from './PlanFilter'
import Testimonials from "./Testimonials";
import Feature from './Feature';
import Footer from '../Footer';

const Index = () => {
  return (
    <div>
      <NavBar/>
      <Home />
      <PlanFilter />
      <Feature/>
      <Testimonials />
      <Footer/>
    </div>
  );
}

export default Index