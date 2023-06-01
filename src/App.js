
import './App.css';
import NavBar from './components/NavBar';
import HeroPage from './components/HeroPage';
import Features from './components/Features';
import Choose from './components/Choose';
import Plan from './components/Plan';
import Footer from './components/Footer';
import Home from './components/Home/Index';

function App() {
  return (
    <div className="bg-black">
    <NavBar/>
    {/* <Home/> */}
    <HeroPage/>
    <Features/>
    <Choose/>
    <Plan/>
    <Footer/>
    </div>
  );
}

export default App;
