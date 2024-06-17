import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Inicio from './componentes/Comp';
import Historia from './componentes/Comp1';
import Recorrido from './componentes/Comp2';
import NavBarExample from './layouts/navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBarExample />}>
          <Route index element={<Inicio titulo="Introducción"/>} />
          <Route path='Comp1' element={<Historia titulo="Historia" />} />
          <Route path='Comp2' element={<Recorrido titulo="Recorrido" />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
