import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/test" element={<WarehouseListPage />} />
        {/* {<Route path ="/:warehouse" element = {<Warehouse />} />} */}
        {/* {<Route path ="/:warehouse/edit" element = {<Warehouse />} />} */}
        {/* {<Route path ="/warehouse/add" element = {<AddWarehouse />} />} */}
        {/* {<Route path ="/inventory" element = {<Inventory />} />} */}
        {/* {<Route path ="/inventory/:item" element = {<InventoryItem />} />} */}
        {/* {<Route path ="/inventory/:item/edit" element = {<InventoryItemEdit />} />} */}
        {/* {<Route path ="/inventory/add" element = {<AddInventory />} />} */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
git branch -r

export default App;
