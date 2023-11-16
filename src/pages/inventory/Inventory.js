import "./Inventory.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";

const API_URL = process.env.API_URL || "http://localhost:8080";

function Inventory() {
  const [inventoryList, setInventoryList] = useState([null]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL + "/inventories")
      .then((response) => {
        setInventoryList(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {!isLoading ? (
        <InventoryList inventoryList={inventoryList} />
      ) : (
        <div className="isLoading">Loading...</div>
      )}
    </>
  );
}

export default Inventory;
