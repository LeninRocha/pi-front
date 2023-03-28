import './App.css';
import { Route, Routes,useLocation } from "react-router-dom"
import Header from './components/Header/Header';
import {Deputados} from './pages/Deputados/Deputados.jsx'
import {Home} from './pages/Home/Home.jsx'
import {Perfil} from './pages/Perfil/Perfil.jsx'
function App() {
  const location = useLocation();
  return (
    <div className="App">
       {location.pathname !== '/' && <Header />}
      <Routes>
        <Route  path="/" element={ <Home/> }/>  
        <Route path="/deputados"  element={ <Deputados/>} />
        <Route path="/deputado/:id"  element={ <Perfil/>} />
      </Routes>
    </div>
  );
}

export default App;
