import "./Home.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import DeleteWarehouseModal from "../../components/DeleteWarehouseModal/DeleteWarehouseModal";

const API_URL = process.env.API_URL || "http://localhost:8080";

function Home() {
  const [warehousesList, setWarehousesList] = useState([null]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedWarehouseName, setSelectedWarehouseName] = useState(null);
  const [selectedWarehouseId, setSelectedWarehouseId] = useState(null);
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
  }, [selectedWarehouseId]);

  return (
    <>
      {!showModal ? (
        !isLoading ? (
          <WarehouseList
            warehousesList={warehousesList}
            setSelectedWarehouseName={setSelectedWarehouseName}
            setSelectedWarehouseId={setSelectedWarehouseId}
            setShowModal={setShowModal}
          />
        ) : (
          <div className="isLoading">Loading...</div>
        )
      ) : viewWidth <= 320 ? (
        <DeleteWarehouseModal
          selectedWarehouseName={selectedWarehouseName}
          setShowModal={setShowModal}
          setSelectedWarehouseName={setSelectedWarehouseName}
          setSelectedWarehouseId={setSelectedWarehouseId}
          selectedWarehouseId={selectedWarehouseId}
        />
      ) : !isLoading ? (
        <>
          <DeleteWarehouseModal
            selectedWarehouseName={selectedWarehouseName}
            setShowModal={setShowModal}
            setSelectedWarehouseName={setSelectedWarehouseName}
            setSelectedWarehouseId={setSelectedWarehouseId}
            selectedWarehouseId={selectedWarehouseId}
          />
          <WarehouseList
            warehousesList={warehousesList}
            setSelectedWarehouseName={setSelectedWarehouseName}
            setSelectedWarehouseId={setSelectedWarehouseId}
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
