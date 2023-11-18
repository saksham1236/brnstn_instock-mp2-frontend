import "./Home.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import DeleteWarehouseModal from "../../components/DeleteWarehouseModal/DeleteWarehouseModal";

const API_URL = process.env.API_URL || "http://localhost:8080";

function Home() {
  const [warehousesList, setWarehousesList] = useState([null]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setViewWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [viewWidth]);

  useEffect(() => {
    axios
      .get(API_URL + "/warehouses")
      .then((response) => {
        setWarehousesList(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>

      {!showModal ? (
        !isLoading ? (
          <WarehouseList
            warehousesList={warehousesList}
            setSelectedWarehouse={setSelectedWarehouse}
            setShowModal={setShowModal}
          />
        ) : (
          <div className="isLoading">Loading...</div>
        )
      ) : 

      viewWidth <= 320 ? (
        <DeleteWarehouseModal
          selectedWarehouse={selectedWarehouse}
          setShowModal={setShowModal}
          setSelectedWarehouse={setSelectedWarehouse}
        />
      ) : !isLoading ? (
        <>
          <DeleteWarehouseModal selectedWarehouse={selectedWarehouse}
          setShowModal={setShowModal} setSelectedWarehouse={setSelectedWarehouse} />
          <WarehouseList
            warehousesList={warehousesList}
            setSelectedWarehouse={setSelectedWarehouse}
            setShowModal={setShowModal}
          />
        </>
      ) : (
        <div className="isLoading">Loading...</div>
      )}
    </>
  );
}

export default Home;
