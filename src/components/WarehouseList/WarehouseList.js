import React from "react";
import "./WarehouseList.scss";
import { Link } from "react-router-dom";
import sortImg from "../../assets/Icons/sort-24px.svg";
import searchImg from "../../assets/Icons/search-24px.svg";
import deleteImg from "../../assets/Icons/delete_outline-24px.svg";
import editImg from "../../assets/Icons/edit-24px.svg";
import chevronImg from "../../assets/Icons/chevron_right-24px.svg";

function WarehouseList({ warehousesList }) {
  const columnHeaderArray = [
    "Warehouse",
    "Address",
    "Contact Name",
    "Contact Information",
    "Actions",
  ];

  return (
    <>
      <div className="title-block">
        <div className="title-block__container">
          <div className="title-block__title">Warehouses</div>
          <div className="title-block__search tablet-view">
            <input
              type="text"
              className="title-block__search-bar"
              placeholder="Search..."
            />
            <img src={searchImg} alt="sort icon" />
          </div>
          <div className="title-block__add tablet-view">
            <button className="title-block__add-button">
              + Add New Warehouse
            </button>
          </div>
        </div>
      </div>

      <div className="card__background">
        <div className="card__card">
          <div className="search-block mobile-view">
            <div className="search-block__search">
              <input
                type="text"
                className="search-block__search-bar"
                placeholder="Search..."
              />
              <img src={searchImg} alt="sort icon" />
            </div>

            <div className="search-block__add">
              <button className="search-block__add-button">
                + Add New Warehouse
              </button>
            </div>
          </div>

          <div className="sort-block">
            <div className="sort-block__container">
              {columnHeaderArray.map((columnHeader, index) => (
                <div className="sort-block__column-header">
                  <div className="sort-block__header">{columnHeader}</div>
                  {index !== 4 && (
                    <div className="sort-block__buttons">
                      <div className="sort-block__icons">
                        <img
                          className="sort-block__icon"
                          src={sortImg}
                          alt="sort icon"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="warehouses-block">
            {warehousesList.map((warehouse) => (
              <div key={warehouse.id} className="warehouses-block__row">
                <div className="warehouses-block__mobile-block-1">
                  <div className="warehouses-block__column-1">
                    <div className="warehouses-block__header mobile-view">
                      {columnHeaderArray[0]}
                    </div>
                    <div className="warehouses-block__warehouse-name">
                      <Link to={`/warehouses/${warehouse.id}`}>
                        {warehouse.warehouse_name}<img src={chevronImg} alt="chevron icon" />
                      </Link>
                    </div>
                    <div className="warehouses-block__header mobile-view">
                      {columnHeaderArray[1]}
                    </div>

                    <div className="warehouses-block__warehouse-address">
                      {warehouse.address}, {warehouse.city}, {warehouse.country}
                    </div>
                  </div>
                  <div className="warehouses-block__column-2">
                    <div className="warehouses-block__header mobile-view">
                      {columnHeaderArray[2]}
                    </div>
                    <div className="warehouses-block__warehouse-contact-name">
                      {warehouse.contact_name}
                    </div>

                    <div className="warehouses-block__header mobile-view">
                      {columnHeaderArray[3]}
                    </div>
                    <div className="warehouses-block__warehouse-contact-info">
                      <div className="warehouses-block__warehouse-contact-number">
                        {warehouse.contact_phone}
                      </div>
                      <div className="warehouses-block__warehouse-contact-email">
                        {warehouse.contact_email}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="warehouses-block__mobile-block-2">
                  <div className="warehouses-block__warehouse-actions">
                    <div className="warehouses-block__warehouse-actions-delete">
                      <img src={deleteImg} alt="delete icon" />
                    </div>
                    <div className="warehouses-block__warehouse-actions-edit">
                      <img src={editImg} alt="edit icon" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WarehouseList;
