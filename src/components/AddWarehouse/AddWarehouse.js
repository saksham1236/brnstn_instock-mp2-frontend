import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// pages
import './AddWarehouse.scss'
// files
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg'



export default function AddWarehouseForm () {
  
}




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
            <h3 className="text-input__header">Warehouse Name</h3>
              <input 
                className="text-input__input" 
                placeholder="Warehouse Name">
              </input>
            <h3 className="text-input__header">Street Address</h3>
              <input 
                className="text-input__input" 
                placeholder="Street Address">
              </input>
            <h3 className="text-input__header">City</h3>
              <input 
                className="text-input__input" 
                placeholder="City">
              </input>
            <h3 className="text-input__header">Country</h3>
              <input 
                className="text-input__input" 
                placeholder="Country">
              </input>
          </section>

          <section className="warehouse-form__section--second">
            <h2 className="warehouse-form__header">Contact Details</h2>
            <h3 className="text-input__header">Contact Name</h3>
              <input 
                className="text-input__input" 
                placeholder="Contact Name">
              </input>
            <h3 className="text-input__header">Position</h3>
              <input 
                className="text-input__input" 
                placeholder="Position">
              </input>
            <h3 className="text-input__header">Phone Number</h3>
              <input 
                className="text-input__input" 
                placeholder="Phone Number">
              </input>
            <h3 className="text-input__header">Email</h3>
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