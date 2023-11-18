//Styles Import
import "./EditInventory.scss";
//Component Imports
import TitleComponent from "../TitleComponent/TitleComponent";
import InputComponent from "../Input/Input";
import DropdownSelect from "../Dropdown/Dropdown";
import RadioButtons from "../RadioButton/RadioButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function EditInventory(props) {
	const params = useParams();
	const [itemData, setItemData] = useState();

	useEffect(() => {
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
		fetchData();
		console.log("ItemData:", itemData);
	}, []);

	// const editFormHandler {

	// }

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
							<form className='inventory-edit__form'>
								<div className='inventory-edit__form__column'>
									<h2 className="inventory-edit__form__header">Item Details</h2>
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
										items={["Hello", "Bye", "Hi"]}
									/>
								</div>

                                <div className='inventory-edit__form__column'>
									<h2 className="inventory-edit__form__header">Item Availabilty</h2>
                                    <RadioButtons labelName = "Status" items = {["InStock", "Out of Stock"]} />
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
