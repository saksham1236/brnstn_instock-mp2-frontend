// import "./InventoryPage.scss";
// import { useState, useEffect } from "react";
// import axios from "axios";
// // import InventoryList from "../../components/InventoryList/InventoryList";

// const API_URL = process.env.API_URL || "http://localhost:8080";

// function Inventory() {
//   const [inventory, setInventory] = useState([null]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get(API_URL + "/inventory")
//       .then((response) => {
//         setInventory(response.data);
//         console.log(response.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <>
//       {!isLoading ? (
//         <InventoryList inventoryList={inventoryList} />
//       ) : (
//         <div className="isLoading">Loading...</div>
//       )}
//     </>
//   );
// }

// export default Inventory;
