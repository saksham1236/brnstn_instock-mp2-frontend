import "./Home.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import WarehouseList from "../../components/WarehouseList/WarehouseList";

const API_URL = process.env.API_URL || "http://localhost:8080";

function Home() {
  const [warehousesList, setWarehousesList] = useState([null]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL + "/warehouses")
      .then((response) => {
        setWarehousesList(response.data);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {!isLoading ? (
        <WarehouseList warehousesList={warehousesList} />
      ) : (
        <div className="isLoading">Loading...</div>
      )}
    </>
  );
}

export default Home;
