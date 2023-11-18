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
  const [showModal, setShowModal] = useState(true);
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
      {/* this code block below needs to be fixed, warehouse list component needs to  */}

      {
        !showModal ? (
          !isLoading ? (
            <WarehouseList warehousesList={warehousesList} />
          ) : (
            <div className="isLoading">Loading...</div>
          )
        ) : //show modal

        viewWidth <= 320 ? (
          <DeleteWarehouseModal />
        ) : !isLoading ? (
          <>
            <DeleteWarehouseModal style={{ transform: 'translateY(-50px)' }} />
            <WarehouseList warehousesList={warehousesList} />
          </>
        ) : (
          <div className="isLoading">Loading...</div>
        )

        // ((!showModal) && (viewWidth <= 320)) ? (
        //   !isLoading ? (
        //     <WarehouseList warehousesList={warehousesList} />
        //   ) : (
        //     <div className="isLoading">Loading...</div>
        //   )
        // ) : (
        //   !isLoading ? (
        //     <WarehouseList warehousesList={warehousesList} />
        //   ) : (
        //     <div className="isLoading">Loading...</div>
        //   )
        // )
      }
    </>
  );
}

export default Home;
