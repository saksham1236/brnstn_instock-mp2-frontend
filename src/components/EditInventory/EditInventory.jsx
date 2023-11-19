//Styles Import
import "./EditInventory.scss";
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
 * @returns Renders Edit Inventory Form component
 */

function EditInventory(props) {
	const params = useParams();
	const [itemData, setItemData] = useState();
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

	const fetchData = async () => {
		axios
			.get(`http://localhost:8080/inventories/${params.itemId}`)
			.then((res) => {
				const items = res.data;
				setItemData(items[0]);
			})
			.catch((err) => {
				console.log(
					`Axios error http://localhost:8080/inventories/:id: ${err}`
				);
			});
	};

	const postData = async (formData) => {
		axios
		.put(`http://localhost:8080/inventories/${params.itemId}`, formData)
		.then((res) => {
			alert(`Item has been updated successfully ${res.status}`)
			fetchData();
		})
		.catch((err) =>{
			alert(`Axios error updating item details,  http://localhost:8080/inventories/${params.itemId}: ${err}`)
		})
	}

	useEffect(() => {

		fetchData();
		console.log("ItemData:", itemData);
	}, []);

	const editFormHandler = (event) => {
		event.preventDefault();
		alert(event);
		navigate(-1);
	}


	const backButtonHandler = (event) => {
		event.preventDefault();
		navigate(-1);
	};

	const onChangeFormhandler = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
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
							<form className='inventory-edit__form' onSubmit={editFormHandler} onChange = {onChangeFormhandler}>
								<div className='inventory-edit__form__row'>
									<div className='inventory-edit__form__column'>
										<h2 className='inventory-edit__form__header'>
											Item Details
										</h2>
										<InputComponent
											labelName='Item Name'
											fieldName='item_name'
											defaultValue={itemData.item_name}
										/>
										<InputComponent
											labelName='Description'
											type='textarea'
											fieldName='description'
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
											fieldName='category'
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
											fieldName='status'
										/>

										<DropdownSelect
											labelName='Warehouse'
											items={[
												"Manhattan",
												"Washington",
												"Jersey",
												"SF",
												"Santa Monica",
												"Seattle",
												"Miami",
												"Boston",
											]}
											defaultValue = {itemData.warehouse_name}
											fieldName='warehouse_name'
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

export default EditInventory;
