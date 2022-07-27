import './App.css';
import { Routes, Route } from 'react-router-dom';

// Pages
import Inicio from './pages/Inicio'
import Personaliza from './pages/Personaliza'
import Plantillas from './pages/Plantillas'
import ComoFunciona from './pages/ComoFunciona'
import Contacto from './pages/Contacto'
import Ingresar from './pages/Ingresar'
import Registrarse from './pages/Registrarse'

// Components
import BarraNavegacion from './components/BarraNavegacion'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <BarraNavegacion />
      <Routes>
        <Route path="/" element={<Inicio title="BuilderX" />} />
        <Route path="builderx" element={<Inicio title="BuilderX" />} />
        
        <Route path="personaliza" element={<Personaliza title="Personaliza tu Perfil"/>} />
        <Route path="plantillas" element={<Plantillas title="Plantillas"/>} />
        <Route path="como-funciona" element={<ComoFunciona title="Como Funciona?"/>} />
        <Route path="contacto" element={<Contacto title="Contacto" />} />
        <Route path="ingresar" element={<Ingresar title="Ingresar" />} />
        <Route path="registrarse" element={<Registrarse title="Registrarse" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;