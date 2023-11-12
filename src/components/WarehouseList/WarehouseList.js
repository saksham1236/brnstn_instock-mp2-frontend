import React from "react";
import "./WarehouseList.scss";
import sortImg from "../../assets/Icons/sort-24px.svg";
import searchImg from "../../assets/Icons/search-24px.svg";

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
          <div className="title-block__search">
            <input
              type="text"
              className="title-block__search-bar"
              placeholder="Search..."
            />
            <img className="" src={searchImg} alt="sort icon" />
          </div>
          <div className="title-block__add">
            <button className="title-block__add-button">
              + Add New Warehouse
            </button>
          </div>
        </div>
      </div>

      <div className="card__background">

        <div className="card__card">

          <div className="sort-block">
            <div className="sort-block__container">
              {columnHeaderArray.map((columnHeader, index) => (
                <div className="sort-block__column-header">
                  <div className="sort-block__header">{columnHeader}</div>
                  {index !== 4 && (
                    <div className="sort-block__buttons">
                      <div className="sort-block__icons">
                        <img className="sort-block__icon" src={sortImg} alt="sort icon" />
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
                <div className="warehouses-block__warehouse-name">
                  {warehouse.warehouse_name}
                </div>
                <div className="warehouses-block__warehouse-address">
                  {warehouse.address}
                </div>
                <div className="warehouses-block__warehouse-contact-name">
                  {warehouse.contact_name}
                </div>
                <div className="warehouses-block__warehouse-contact-info">
                  <div className="warehouses-block__warehouse-contact-number">
                    {warehouse.contact_phone}
                  </div>
                  <div className="warehouses-block__warehouse-contact-email">
                    {warehouse.contact_email}
                  </div>
                </div>
                <div className="warehouses-block__warehouse-actions">
                  <div className="warehouses-block__warehouse-actions-delete">
                    delete
                  </div>
                  <div className="warehouses-block__warehouse-actions-edit">
                    edit
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
