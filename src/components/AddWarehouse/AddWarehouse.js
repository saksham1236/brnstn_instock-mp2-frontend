import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';


// pages
import './AddWarehouse.scss'
// files
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg'



export default function AddWarehouseForm () {
  





return (
  <>
    <main className="page-container">
      <header className="page-header">
        <div className="page-header__div">
          <button className="page-header__button">
            <img
              className="page-header__button-icon"
              src={ArrowBack}
              alt="Back Arrow"
              ></img>
            </button>
          <div className="page-header__header">Add New Warehouse</div>
        </div>
      </header>

      <form id="myForm" noValidate className="warehouse-form">
        <div className="warehouse-form__div">
          
          <section className="warehouse-form__section--first">
            <h2 className="warehouse-form__header">Warehouse Details</h2>
            <label className="text-input__header">Warehouse Name</label>
              <input 
                className="text-input__input" 
                placeholder="Warehouse Name">
              </input>
            <label className="text-input__header">Street Address</label>
              <input 
                className="text-input__input" 
                placeholder="Street Address">
              </input>
            <label className="text-input__header">City</label>
              <input 
                className="text-input__input" 
                placeholder="City">
              </input>
            <label className="text-input__header">Country</label>
              <input 
                className="text-input__input" 
                placeholder="Country">
              </input>
          </section>

          <section className="warehouse-form__section--second">
            <h2 className="warehouse-form__header">Contact Details</h2>
            <label className="text-input__header">Contact Name</label>
              <input 
                className="text-input__input" 
                placeholder="Contact Name">
              </input>
            <label className="text-input__header">Position</label>
              <input 
                className="text-input__input" 
                placeholder="Position">
              </input>
            <label className="text-input__header">Phone Number</label>
              <input 
                className="text-input__input" 
                placeholder="Phone Number">
              </input>
            <label className="text-input__header">Email</label>
              <input 
                className="text-input__input" 
                placeholder="Email">
              </input>
          </section>
        </div>

        <div className="warehouse-form__buttons">
          <button 
            className="button button--cancel"
            type="button">
              Cancel
          </button>
          <button 
            className="button"
            type="submit">
              + Add Warehouse
          </button>
        </div>
        </form>
    </main>
  </>
);
}