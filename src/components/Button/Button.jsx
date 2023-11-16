import "./Button.scss";
import { Link } from "react-router-dom";
import editIcon from "../../assets/Icons/edit-24px.svg";

/**
 * Renders the button component, if icon provided will also render the icon.
 * @param {title, icon, iconAlt, type {cancel | delete | edit}, buttonName, buttonLink, onClick, ...rest} props
 * @returns Button Element
 */
function ButtonEl(props) {
	const { title, icon, iconAlt, type, buttonName, link, onClick, ...rest } =
		props;
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
					{title}
				</button>
			</Link>
		);
	} else if (type === "edit") {
		return (
			<Link
				to={link}
				className='noUnderline'>
				<button
					className='buttonEl'
					name={buttonName}
					onClick={onClick}
					{...rest}>
					<img
						className='button__icon'
						src={editIcon}
						alt={iconAlt}
					/>
					Edit
				</button>
			</Link>
		);
	} else {
		return (
			<button
				className={`buttonEl ${type}`}
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
				{title}
			</button>
		);
	}
}

export default ButtonEl;
