import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import TicTac from './pages/TicTac';

import Header from './components/Header';
import Footer from './components/Footer';

const URL = "http://localhost:4000/";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/TicTac" element={<TicTac />} />
        </Routes>
      <Footer/>

    </div>
  )
}

export default App;
