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
import { Dialog } from "primereact/dialog";
import { Sidebar } from "primereact/sidebar";
import Vacancies from "./components/Vacancies/Vacancies.jsx";

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

  const [catalogName, setCatalogName] = useState("");
  const getCatalogName = (catalog) => {
    setCatalogName(catalog)
  }

  const [navVisible, setNavVisible] = useState(false);
  const [position, setPosition] = useState('center');

  const showNav = (position) => {
    setPosition(position);
    setNavVisible(true);
};

  return (
    <div className='bg-shd w-full flex justify-center bg-cover bg-center bg-fixed min-h-screen'>
      <div className="w-full max-w-[900px] flex flex-col items-center relative pt-20">
        <Header toggleMenu={toggleMenu} setIsOpen={setIsOpen} isOpen={isOpen} />
        <Sidebar visible={isOpen} position="right" onHide={() => setIsOpen(false)}>
          <Navbar toggleMenu={toggleMenu} isOpen={isOpen} />    
        </Sidebar>
          <MenuBtn toggleMenuItems={toggleMenuItems} showNav={showNav} />

          <Dialog header="Меню" visible={navVisible} position={position} className="w-[90vw] h-[70vh] lg:w-[40vw]" onHide={() => setNavVisible(false)} draggable={false} resizable={false}>
            <MenuNav setItem={setItem} setNavVisible={setNavVisible} getCatalogName={getCatalogName} toggleMenuItems={toggleMenuItems} data={data} />
          </Dialog>

          <Routes>
            <Route exact path="/shd" element={<Main />} />
            <Route path="/menu-items" element={<MenuCards setItem={setItem} isItemsOpen={isItemsOpen} getCatalogName={getCatalogName} toggleMenuItems={toggleMenuItems} data={data} />} />
            <Route path="/menu" element={<Menu item={item} catalogName={catalogName} />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/vacancies" element={<Vacancies />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
