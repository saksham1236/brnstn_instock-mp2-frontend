import React from "react";

function WarehouseList({ warehousesList }) {
  return (
    <>
      <div className="title-block">
        <div className="title-block__title">Warehouses</div>
        <div className="title-block__search">(search fields)</div>
        <div className="title-block__add">
          <button className="title-block__add-button">
            + Add New Warehouse
          </button>
        </div>
      </div>

      <div className="sort-block">
        <div className="sort-block__column-header--1">
          <div className="sort-block__header">Warehouse</div>
          <div className="sort-block__buttons">
            <div className="sort-block__up">up</div>
            <div className="sort-block__down">down</div>
          </div>
        </div>
        <div className="sort-block__column-header--2">
          <div className="sort-block__header">Address</div>
          <div className="sort-block__buttons">
            <div className="sort-block__up">up</div>
            <div className="sort-block__down">down</div>
          </div>
        </div>
        <div className="sort-block__column-header--3">
          <div className="sort-block__header">Contact Name</div>
          <div className="sort-block__buttons">
            <div className="sort-block__up">up</div>
            <div className="sort-block__down">down</div>
          </div>
        </div>
        <div className="sort-block__column-header--4">
          <div className="sort-block__header">Contact Information</div>
          <div className="sort-block__buttons">
            <div className="sort-block__up">up</div>
            <div className="sort-block__down">down</div>
          </div>
        </div>
        <div className="sort-block__column-header--5">
          <div className="sort-block__header">Actions</div>
          <div className="sort-block__buttons">
            <div className="sort-block__up">up</div>
            <div className="sort-block__down">down</div>
          </div>
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

    </>
  );
}

export default WarehouseList;
