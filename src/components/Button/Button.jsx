import "./Button.scss";
import { Link } from "react-router-dom";
import editIcon from "../../assets/Icons/edit-24px.svg";

/**
 * Renders the button component, if icon provided will also render the icon.
 * @param {title, icon, iconAlt, buttontType {cancel | delete | edit}, buttonName, buttonLink, onClick, ...rest} props
 * @returns Button Element
 */
function ButtonEl(props) {
	const { title, icon, iconAlt, buttonType, buttonName, link, onClick, ...rest } = props;
	if (link) {
		return (
			<Link to={link}>
				<button
					className='buttonEl'
					name={buttonName}
					onClick={onClick}
					{...rest}>
					{icon && (
						<img
							className='button__icon'
							src={icon}
							alt={iconAlt}
						/>
					)}
					<div className = "button__title">
					{title}
					</div>
					
				</button>
			</Link>
		);
	} else if (buttonType === "edit") {
		return (
			<Link
				to={link}
				className='noUnderline'>
				<button
					className='buttonEl edit'
					name={buttonName}
					onClick={onClick}
					{...rest}>
					<img
						className='button__icon'
						src={editIcon}
						alt={iconAlt}
					/>
					<div className = "button__title edit__button__title">
						{title}
					</div>
				</button>
			</Link>
		);
	} else {
		return (
			<button
				className={`buttonEl ${buttonType}`}
				name={buttonName}
				onClick={onClick}
				{...rest}>
				{icon && (
					<img
						className='button__icon'
						src={icon}
						alt={iconAlt}
					/>
				)}
					<div className = "button__title">
						{title}
					</div>
			</button>
		);
	}
}

export default ButtonEl;