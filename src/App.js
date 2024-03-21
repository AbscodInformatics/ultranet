import { BrowserRouter } from "react-router-dom";
import Routing from "./components/Routing";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routing />
      </div>
      <div className='fixed z-[400] bottom-8 right-5 md:bottom-20 md:right-10 '>
        <a
          href='https://wa.me/971542436037?text=Hello how can I help you ?'
          target='_blank'
        >
          <img src='/whatsappLogo.svg' alt='whatsappLogo' width={60} />
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
