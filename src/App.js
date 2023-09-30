import { createContext } from 'react';
import './App.css';
import Home from './pages/home';

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

