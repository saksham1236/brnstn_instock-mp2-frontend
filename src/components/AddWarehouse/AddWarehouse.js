import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

// pages
import './AddWarehouse.scss';
// files
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import ErrorIcon from '../../assets/Icons/error-24px.svg';

// regex phone number validation
const regexPhone = new RegExp(
	/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
	'im'
);
// regex email validation
const regexEmail = new RegExp(
	/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	'i'
);

export default function AddWarehouseForm() {
	// to be used when api is implemented
	// const navigate = useNavigate()

	const [error, setError] = useState({});

	// build new warehouse object to hold data, to be submitted to server
	const [formData, setFormData] = useState({
		warehouseName: '',
		streetAddress: '',
		city: '',
		country: '',
		contactName: '',
		position: '',
		phoneNumber: '',
		email: '',
	});

	// event handler that updates state, handles multiple form input field changes
	const formHandler = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	// form input validator
	const validateForm = () => {
		let isValid = true;
		let errors = {};

		if (!formData.warehouseName) {
			isValid = false;
			errors.warehouseName = 'This field is required';
		}
		if (!formData.streetAddress) {
			isValid = false;
			errors.streetAddress = 'This field is required';
		}
		if (!formData.city) {
			isValid = false;
			errors.city = 'This field is required';
		}
		if (!formData.country) {
			isValid = false;
			errors.country = 'This field is required';
		}
		if (!formData.contactName) {
			isValid = false;
			errors.contactName = 'This field is required';
		}
		if (!formData.position) {
			isValid = false;
			errors.position = 'This field is required';
		}
		if (!regexPhone.test(formData.phoneNumber)) {
			isValid = false;
			errors.phoneNumber = 'This field is required';
		}
		if (!regexEmail.test(formData.email)) {
			isValid = false;
			errors.email = 'This field is required';
		}

		setError(errors); // Update the error state with any validation messages
		return isValid; // Return the validity of the form
	};

	// form submit handler
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			// If form is valid, can call API to submit form data
		}
	};

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

				<form
					onSubmit={handleSubmit}
					id="myForm"
					noValidate
					className="warehouse-form"
				>
					<div className="warehouse-form__div">
						<section className="warehouse-form__section--first">
							<h2 className="warehouse-form__header">Warehouse Details</h2>
							<label className="text-input__header">Warehouse Name</label>
							<input
								className={`text-input__input ${
									error.warehouseName ? 'error-input' : ''
								}`}
								placeholder="Warehouse Name"
								name="warehouseName"
								value={formData.warehouseName}
								onChange={formHandler}
							></input>
							{error.warehouseName && (
								<p className="error">
									<img className="error-icon" src={ErrorIcon} alt="Error" />
									{error.warehouseName}
								</p>
							)}
							<label className="text-input__header">Street Address</label>
							<input
								className={`text-input__input ${
									error.streetAddress ? 'error-input' : ''
								}`}
								placeholder="Street Address"
								name="streetAddress"
								value={formData.streetAddress}
								onChange={formHandler}
							></input>
							{error.streetAddress && (
								<p className="error">
									<img className="error-icon" src={ErrorIcon} alt="Error" />
									{error.streetAddress}
								</p>
							)}
							<label className="text-input__header">City</label>
							<input
								className={`text-input__input ${
									error.city ? 'error-input' : ''
								}`}
								placeholder="City"
								name="city"
								value={formData.city}
								onChange={formHandler}
							></input>
							{error.city && (
								<p className="error">
									<img className="error-icon" src={ErrorIcon} alt="Error" />
									{error.city}
								</p>
							)}
							<label className="text-input__header">Country</label>
							<input
								className={`text-input__input ${
									error.country ? 'error-input' : ''
								}`}
								placeholder="Country"
								name="country"
								value={formData.country}
								onChange={formHandler}
							></input>
							{error.country && (
								<p className="error">
									<img className="error-icon" src={ErrorIcon} alt="Error" />
									{error.country}
								</p>
							)}
						</section>

						<section className="warehouse-form__section--second">
							<h2 className="warehouse-form__header">Contact Details</h2>
							<label className="text-input__header">Contact Name</label>
							<input
								className={`text-input__input ${
									error.contactName ? 'error-input' : ''
								}`}
								placeholder="Contact Name"
								name="contactName"
								value={formData.contactName}
								onChange={formHandler}
							></input>
							{error.contactName && (
								<p className="error">
									<img className="error-icon" src={ErrorIcon} alt="Error" />
									{error.contactName}
								</p>
							)}
							<label className="text-input__header">Position</label>
							<input
								className={`text-input__input ${
									error.position ? 'error-input' : ''
								}`}
								placeholder="Position"
								name="position"
								value={formData.position}
								onChange={formHandler}
							></input>
							{error.position && (
								<p className="error">
									<img className="error-icon" src={ErrorIcon} alt="Error" />
									{error.position}
								</p>
							)}
							<label className="text-input__header">Phone Number</label>
							<input
								className={`text-input__input ${
									error.phoneNumber ? 'error-input' : ''
								}`}
								placeholder="Phone Number"
								name="phoneNumber"
								value={formData.phoneNumber}
								onChange={formHandler}
							></input>
							{error.phoneNumber && (
								<p className="error">
									<img className="error-icon" src={ErrorIcon} alt="Error" />
									{error.phoneNumber}
								</p>
							)}
							<label className="text-input__header">Email</label>
							<input
								className={`text-input__input ${
									error.email ? 'error-input' : ''
								}`}
								placeholder="Email"
								type="email"
								name="email"
								value={formData.email}
								onChange={formHandler}
							></input>
							{error.email && (
								<p className="error">
									<img className="error-icon" src={ErrorIcon} alt="Error" />
									{error.email}
								</p>
							)}
						</section>
					</div>

					<div className="warehouse-form__buttons">
						<button className="button button--cancel" type="button">
							Cancel
						</button>
						<button className="button" type="submit">
							+ Add Warehouse
						</button>
					</div>
				</form>
			</main>
		</>
	);
}
