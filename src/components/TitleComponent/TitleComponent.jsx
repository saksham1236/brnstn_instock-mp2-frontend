import { useNavigate, Link, Navigate } from "react-router-dom";
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import './TitleComponent.scss';
import searchImg from '../../assets/Icons/search-24px.svg'
import ButtonEl from "../Button/Button";
import editIcon from "../../assets/Icons/edit-24px.svg"

/**
 *
 * @param {ReactProps} props
 * @returns Title Component with header
 */
function TitleComponent(props) {

	const { title, backButton, buttonEl, searchComponent }  = props;
	const navigate = useNavigate();
	const backButtonHandler = (event) => {
		event.preventDefault();
		navigate(-1);
	}
	
	return (
		<div className='title-block'>
			<div className='title-block__container'>
				
				<div className='title-block__title'>
				{backButton && <Link className="title-block__back-button" to = ".." onClick={backButtonHandler}><div className = 'title-block__back-button__img'><img src = {arrowIcon} alt = 'back Icon'/></div></Link>} 
					{title}
				</div>

				{searchComponent && (<div className='title-block__search tablet-view'>
					<input
						type='text'
						className='title-block__search-bar'
						placeholder='Search...'
					/>
					<img
						src={searchImg}
						alt='sort icon'
					/>
				</div>)}
				<ButtonEl type = "edit"/>
			</div>
		</div>
	);
}

export default TitleComponent;