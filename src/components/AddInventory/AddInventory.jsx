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
		return (
			<>
				<TitleComponent
					title='Add Inventory Item'
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
											defaultValue="Add Item Name"
                                            required
										/>
										<InputComponent
											labelName='Description'
											type='textarea'
											defaultValue="Add a description"
                                            required
										/>
										<DropdownSelect
											labelName='Category'
											items={[
                                                "Please select a category",
												"Electronics",
												"Gear",
												"Apparel",
												"Accessories",
												"Health",
											]}
											defaultValue = "Please select a category"
                                            required
										/>
									</div>

									<div className='inventory-edit__form__column'>
										<h2 className='inventory-edit__form__header'>
											Item Availabilty
										</h2>
										<RadioButtons
											labelName='Status'
											items={["In Stock", "Out of Stock"]}
										/>
                                        <InputComponent
											labelName='Quantity'
											defaultValue="0"
                                            required
										/>
										<DropdownSelect
											labelName='Warehouse'
											items={[
                                                "Please select a Warehouse",
												"Manhattan",
												"Washington",
												"Jersey",
												"San Francisco",
												"Santa Monica",
												"Seattle",
												"Miami",
												"Boston",
											]}
											defaultValue = "Please select a Warehouse"
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

}

export default AddInventory;
