import { BrowserRouter } from "react-router-dom";
import Routing from './components/Routing';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routing/>
      </div>
    </BrowserRouter>
  );
}

export default App;
