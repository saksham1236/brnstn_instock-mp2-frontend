import React from "react";
import { Link } from "react-router-dom";
import "./WarehouseDetails.scss";
import TitleComponent from "../TitleComponent/TitleComponent";


/*
MP2-10 Front-End: Warehouse Details Component (Responsive)
Create the Warehouse Details component. The user should also be able to navigate back to the Warehouse List Page 
from this page. Ensure that it works at and between all breakpoints and is fully responsive without any elements overlapping.
Note: This does not include the inventory list below the warehouse details. 
*/
function WarehouseDetails() {
  return (
    <div>
      <TitleComponent />
    </div>
  )
}

export default WarehouseDetails;