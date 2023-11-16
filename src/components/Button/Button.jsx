import './Button.scss';

function ButtonEl(props) {
    const {title, icon, iconAlt} = props;
	return (
		<button className='title-block__add-button'><img src = {icon} alt = {iconAlt} />{title}</button>
	);
}

export default ButtonEl;
