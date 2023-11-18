import "./Inventory.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";
import DeleteInventoryModal from "../../components/DeleteInventoryModal/DeleteInventoryModal";

const API_URL = process.env.API_URL || "http://localhost:8080";

function Inventory() {
  const [inventoryList, setInventoryList] = useState([null]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setViewWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [viewWidth]);

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
      {!showModal ? (
        !isLoading ? (
          <InventoryList
            inventoryList={inventoryList}
            setSelectedInventory={setSelectedInventory}
            setShowModal={setShowModal}
          />
        ) : (
          <div className="isLoading">Loading...</div>
        )
      ) : viewWidth <= 320 ? (
        <DeleteInventoryModal
          selectedInventory={selectedInventory}
          setShowModal={setShowModal}
          setSelectedInventory={setSelectedInventory}
        />
      ) : !isLoading ? (
        <>
          <DeleteInventoryModal
            selectedInventory={selectedInventory}
            setShowModal={setShowModal}
            setSelectedInventory={setSelectedInventory}
          />{" "}
          <InventoryList
            inventoryList={inventoryList}
            setSelectedInventory={setSelectedInventory}
            setShowModal={setShowModal}
          />
        </>
      ) : (
        <div className="isLoading">Loading...</div>
      )}

      {/*       {!isLoading ? (
        <InventoryList inventoryList={inventoryList} />
      ) : (
        <div className="isLoading">Loading...</div>
      )} */}
    </>
  );
}

export default Inventory;
