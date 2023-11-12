import "./WarehouseListPage.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:8080";

function WarehouseListPage() {
  return (
    <>
      <p>Hello!</p>
    </>
  );
}

export default WarehouseListPage;
