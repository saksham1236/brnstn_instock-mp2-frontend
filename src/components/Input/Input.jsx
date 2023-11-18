import "./Input.scss";

function InputComponent(props) {
	const { label, fieldName, value, type, customClasses, ...rest } = props;
	if (!type) {
		type = "text";
	}
	if (!fieldName) {
		fieldName = label;
	}
	return (
		<div className={`input ${customClasses}`}>
			<label for={fieldName}>
				{label}
                <input type={type} name={fieldName} {...rest}>
						{value}
				</input>
			</label>
		</div>
	);
}

export default InputComponent;
