import React from 'react';
import { HashRouter } from "react-router-dom";
import Navbar from './components/navbar';
import Rotas from './rotas';


function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <div className="container mt-5">
          <Rotas />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
