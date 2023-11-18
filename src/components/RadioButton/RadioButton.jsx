function RadioButtons(props) {
	let {
		items,
		labelName,
		fieldName,
		defaultValue,
		type,
		customClasses,
		...rest
	} = props;

    if (!fieldName) {
		fieldName = labelName;
	}

	return (
		<div className={`inputEl ${customClasses ? customClasses : ""}`}>
			<label
				className='inputEl__label label'
				for={fieldName}>
				<h3>{labelName}</h3>
			</label>
        {items.map(item => <><input className="inputEl__radio" type = "radio" name ={fieldName} id = {`${fieldName}-${item}`}/><label for = {item}>{item}</label></>)}
		</div>
	);
}

export default RadioButtons;
