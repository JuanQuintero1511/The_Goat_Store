import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import { Header } from './components/Header/Header';
import { Colecciones } from './components/Colecciones/Colecciones';
import { Barra } from './components/Barra/Barra';
import { Home } from './components/Home/Home';
import { Goats } from './components/Goats/Goats';
import { Historia } from './components/Historia/Historia';
import { Contact } from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
        <Barra />
        <Header/>
      <Routes>
          <Route path='/colecciones' element = {<Colecciones />} />
          <Route path='/' element = {<Home/>} />
          <Route path='/goats' element = {<Goats/>} />
          <Route path='/historia' element = {<Historia/>} />
          <Route path='/contact' element = {<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
