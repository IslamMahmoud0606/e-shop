import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';  
import Nav from "./componats/Header/Nav";
import Home from "./componats/Home/Home";
import Product from "./componats/Product/Product";
import Footer from "./componats/Footer/Footerr";

function App() {
  return (
    <div>
      <Nav />
      <Home/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
