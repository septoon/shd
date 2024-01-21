import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import { data } from "./assets/data/data.js";
import MenuNav from "./components/Menu/MenuNav.jsx";
import MenuBtn from "./components/Menu/MenuBtn.jsx";
import Contacts from "./components/About/Contacts.jsx";
import Delivery from "./components/Delivery/Delivery.jsx";
import Main from "./components/Main/Main.jsx";
import MenuCards from "./components/Menu/MenuCards.jsx";

function App() {
  const firstKey = Object.keys(data)[0];
  
  const [item, setItem] = useState(data[firstKey]);
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (e) => {
    console.log(e.target)
    setIsOpen(!isOpen);
  };

  const [isItemsOpen, setIsItemsOpen] = useState(false);

  const toggleMenuItems = () => {
    setIsItemsOpen(!isItemsOpen);
  };

  const [catalogName, setCatalogName] = useState("");
  const getCatalogName = (catalog) => {
    setCatalogName(catalog)
  }

  const appStyle = "w-full flex flex-col items-center relative pt-20"

  return (
    <div className="bg-shd w-full bg-cover bg-center bg-fixed min-h-screen">
      <div className={isOpen ? appStyle + " h-screen overflow-y-hidden" : appStyle}>
        <Header toggleMenu={toggleMenu} setIsOpen={setIsOpen} isOpen={isOpen} />
        <Navbar toggleMenu={toggleMenu} isOpen={isOpen} />
          <MenuBtn toggleMenuItems={toggleMenuItems} />

          <MenuNav setItem={setItem} setIsOpen={setIsOpen} setIsItemsOpen={setIsItemsOpen} isItemsOpen={isItemsOpen} getCatalogName={getCatalogName} toggleMenuItems={toggleMenuItems} data={data} />

          <Routes>
            <Route exact path="/shd" element={<Main />} />
            <Route exact path="/menu-items" element={<MenuCards setItem={setItem} isItemsOpen={isItemsOpen} getCatalogName={getCatalogName} toggleMenuItems={toggleMenuItems} data={data} />} />
            <Route path="/menu" element={<Menu item={item} catalogName={catalogName} />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
