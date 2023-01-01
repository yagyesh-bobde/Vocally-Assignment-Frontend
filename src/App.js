import Home from './Pages/Home';
import './App.css';
import ContextState from './Context/modals';
import { useContext } from 'react';


function App() {
  
  return (
    <>
        <ContextState>
          <Home />
        </ContextState>
    </>
  );
}

export default App;
