/* eslint-disable react/prop-types */
function FormTextField({ fieldname, values, handleChange }) {
	return (
		<div className="form-text-field">
			<label>
				<span>
					{fieldname.charAt(0).toUpperCase() + fieldname.slice(1)}:
				</span>
				<input
					name={fieldname}
					value={values[fieldname]}
					onChange={handleChange}
				/>
			</label>
		</div>
	);
}

export default FormTextField;
