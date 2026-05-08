import { useState } from "react";
import './App.css';
import Ceradaproject from './Ceradaproject';
import Home from './Home';
import About from './About';
import Conference from "./Conference";
import Tracks from "./Tracks";

function App() {

  const [page, setPage] = useState("home");
  return <>
    <Ceradaproject/>
    <Home />
    <About/>
    <Conference/>
    <Tracks/>

    
  </>
}

export default App;
