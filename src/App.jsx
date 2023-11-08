import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './styles/App.scss';
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import AddWarehouseForm from "./components/AddWarehouse/AddWarehouse"

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        {/* {<Route path ="/" element = {<Warehouse also known as home page />} />} */}
        {/* {<Route path ="/:warehouse" element = {<Warehouse />} />} */}
        {/* {<Route path ="/:warehouse/edit" element = {<Warehouse />} />} */}
        {<Route path ="/warehouse/add" element = {<AddWarehouseForm />} />}
        {/* {<Route path ="/inventory" element = {<Inventory />} />} */}
        {/* {<Route path ="/inventory/:item" element = {<InventoryItem />} />} */}
        {/* {<Route path ="/inventory/:item/edit" element = {<InventoryItemEdit />} />} */}
        {/* {<Route path ="/inventory/add" element = {<AddInventory />} />} */}
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;