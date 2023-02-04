import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./component/NavBar/NavBar";
import Cart from './component/Cart/Cart';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import Contacto from "./component/Contacto/Contacto"


function App() {
  return (
    <BrowserRouter>

    <Navbar />

    <Routes>
      <Route path="/" element={ <ItemListContainer /> }/>
      <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
      <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
      <Route path="/contacto" element={ <Contacto />} />
      <Route path="/cart" element = { <Cart />} />
      <Route path="*" element={ <Navigate to={"/"}/> }/>
      
      
    </Routes>  

    {/* <Footer /> */}

  </BrowserRouter>
  );
}

export default App;
