//Styles Import
import "./AddInventory.scss";
//Component Imports
import TitleComponent from "../TitleComponent/TitleComponent";
import InputComponent from "../Input/Input";
import DropdownSelect from "../Dropdown/Dropdown";
import RadioButtons from "../RadioButton/RadioButton";
import ButtonEl from "../Button/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

/**
 * 
 * @param {*} props 
 * @returns Renders Add Inventory Form component
 */

function AddInventory(props) {
    
	const params = useParams();
	const [itemData, setItemData] = useState();
	const navigate = useNavigate();
	// const [formData, setFormData] = useState();

	const addFormHandler = (event) => {
		event.preventDefault();
		alert(event);
		navigate(-1);
	}


	const backButtonHandler = (event) => {
		event.preventDefault();
		navigate(-1);
	};


	if (itemData) {
		return (
			<>
				<TitleComponent
					title='Edit Inventory Item'
					backButton={true}
				/>

				<section className='card-container__background'>
					<div className='card-container__card'>
						<div className='inventory-edit__container'>
							<form className='inventory-edit__form' onSubmit={addFormHandler}>
								<div className='inventory-edit__form__row'>
									<div className='inventory-edit__form__column'>
										<h2 className='inventory-edit__form__header'>
											Item Details
										</h2>
										<InputComponent
											labelName='Item Name'
											defaultValue={itemData.item_name}
										/>
										<InputComponent
											labelName='Description'
											type='textarea'
											defaultValue={itemData.description}
										/>
										<DropdownSelect
											labelName='Category'
											items={[
												"Electronics",
												"Gear",
												"Apparel",
												"Accessories",
												"Health",
											]}
											defaultValue = {itemData.category}
										/>
									</div>

									<div className='inventory-edit__form__column'>
										<h2 className='inventory-edit__form__header'>
											Item Availabilty
										</h2>
										<RadioButtons
											labelName='Status'
											items={["In Stock", "Out of Stock"]}
											defaultValue = {itemData.status}
										/>

										<DropdownSelect
											labelName='Warehouse'
											items={[
												"Manhattan",
												"Washington",
												"Jersey",
												"San Francisco",
												"Santa Monica",
												"Seattle",
												"Miami",
												"Boston",
											]}
											defaultValue = {itemData.warehouse_name}
										/>
									</div>
								</div>
								<div className='inventory-edit__form__row'>
									<div className='inventory-edit__form__buttons'>
										<ButtonEl
											title='Cancel'
											buttonType='cancel'
											onClick = {backButtonHandler}
										/>
										<ButtonEl title='Submit' type = "submit"/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</section>
			</>
		);
	} else {
		return <h1>Loading</h1>;
	}
}

export default AddInventory;
