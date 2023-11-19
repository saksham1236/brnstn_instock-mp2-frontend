import TitleComponent from "../TitleComponent/TitleComponent";
import InputComponent from "../Input/Input";
import DropdownSelect from "../Dropdown/Dropdown";
import RadioButtons from "../RadioButton/RadioButton";
import ButtonEl from "../Button/Button";
import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
/**
 *
 * @param {*} props
 * @returns Renders Add Inventory Form component
 */

function AddInventory(props) {
	const params = useParams();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		id: "",
		warehouse_id: "",
		item_name: "",
		description: "",
		category: "",
		status: "",
		quantity: "",
		created_at: "",
		updated_at: "",
		warehouse_name: "",
	});

	const formHandler = (event) => {
		event.preventDefault();
		postData(formData);
	};
	const onChangeFormhandler = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const backButtonHandler = (event) => {
		event.preventDefault();
		navigate(-1);
	};

	const postData = async (formData) => {
		axios
		.put(`http://localhost:8080/inventories/${params.itemId}`, formData)
		.then((res) => {
			alert(`Item has been added successfully ${res.status}`)
		})
		.catch((err) =>{
			alert(`Axios error updating item details,  http://localhost:8080/inventories/${params.itemId}: ${err}`)
		})
	}

	return (
		<>
			<TitleComponent
				title='Add Inventory Item'
				backButton={true}
			/>

			<section className='card-container__background'>
				<div className='card-container__card'>
					<div className='inventory-edit__container'>
						<form
							className='inventory-edit__form'
							onSubmit={formHandler}
							onChange={onChangeFormhandler}>
							<div className='inventory-edit__form__row'>
								<div className='inventory-edit__form__column'>
									<h2 className='inventory-edit__form__header'>
										Item Details
									</h2>
									<InputComponent
										labelName='Item Name'
										fieldName='item_name'
										defaultValue='Add Item Name'
										error = {false}
										required
									/>
									<InputComponent
										labelName='Description'
										type='textarea'
										defaultValue='Add a description'
										fieldName='description'
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
										defaultValue='Please select a category'
										fieldName='category'
										error = {false}
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
										error = {false}
										fieldName='status'
									/>
									<InputComponent
										labelName='Quantity'
										defaultValue='0'
										fieldName='quantity'
										error = {false}
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
										defaultValue='Please select a Warehouse'
										error = {false}
										fieldName='warehouse_name'
									/>
								</div>
							</div>
							<div className='inventory-edit__form__row'>
								<div className='inventory-edit__form__buttons'>
									<ButtonEl
										title='Cancel'
										buttonType='cancel'
										onClick={backButtonHandler}
									/>
									<ButtonEl
										title='+ Add Item'
										type='submit'
									/>
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
