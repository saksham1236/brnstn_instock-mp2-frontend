import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import './styles/App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import InventoryDetails from './components/InventoryDetails/InventoryDetails';
import EditInventoryForm from "./components/EditInventory/EditInventory";
import Inventory from "./pages/inventory/Inventory"
import AddWarehouseForm from "./components/AddWarehouse/AddWarehouse";
import EditWarehouseForm from './components/EditWarehouse/EditWarehouse';


function App() {
  let { itemId } = useParams();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* {<Route path ="/:warehouse" element = {<Warehouse />} />} */}
        {/* {<Route path ="/:warehouse/edit" element = {<Warehouse />} />} */}
        {<Route path ="/warehouse/add" element = {<AddWarehouseForm />} />}
        {<Route path ="/warehouse/:warehouse_id/edit" element = {<EditWarehouseForm />} />}
        {<Route path ="/inventory" element = {<Inventory />} />}
        {<Route path ="/inventory/:itemId" element = {<InventoryDetails />} />}
        {<Route path ="/inventory/:itemId/edit" element = {<EditInventoryForm />} />}
        {/* {<Route path ="/inventory/add" element = {<AddInventory />} />} */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
