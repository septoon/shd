import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import { data } from "./assets/data/data.js";
import MenuNav from "./components/Menu/MenuNav.jsx";
import MenuBtn from "./components/Menu/MenuBtn.jsx";

function App() {
  const firstKey = Object.keys(data)[0];
  
  const [item, setItem] = useState(data[firstKey]);
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isItemsOpen, setIsItemsOpen] = useState(false);

  const toggleMenuItems = () => {
    setIsItemsOpen(!isItemsOpen);
  };

  return (
    <div className="bg-shd w-full bg-cover bg-center bg-fixed flex flex-col items-center relative pt-20 min-h-screen">
      <Header toggleMenu={toggleMenu} isOpen={isOpen} />
      <Navbar toggleMenu={toggleMenu} isOpen={isOpen} />
      <MenuBtn toggleMenuItems={toggleMenuItems} />

      <MenuNav setItem={setItem} isItemsOpen={isItemsOpen} toggleMenuItems={toggleMenuItems} data={data} />

      <Routes>
        <Route exact path="/shd" element={<Menu item={item} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
