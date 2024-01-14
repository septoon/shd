import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="bg-shd bg-cover bg-center bg-fixed flex flex-col items-center relative pt-20 min-h-screen">
      <Header />
      <Routes>
        <Route exact path="/" element={<Menu />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
