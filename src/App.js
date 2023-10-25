import { createContext } from 'react';
import Home from './pages/home';
import './styles.css'

export const MainContext = createContext()
export default function App() {



  return (
    <div className="App">

      <MainContext.Provider>

        <Home />
      </MainContext.Provider>

    </div>
  );
}

