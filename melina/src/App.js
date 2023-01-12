import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>

    <Navbar />

    <Routes>
      <Route path="/" element={ <ItemListContainer /> }/>
      <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
      <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
      <Route path="/contacto" element={ <Contacto />} />
      <Route path="*" element={ <Navigate to={"/"}/> }/>
      
    </Routes>  

    {/* <Footer /> */}

  </BrowserRouter>
  );
}

export default App;
