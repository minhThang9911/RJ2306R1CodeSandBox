/* eslint-disable react/prop-types */
import { addData } from "../../api";
import path from "../../config/path";
import {
	createUserObj,
	createPostObj,
	createCommentObj,
} from "../../utils/createItem";
import { Formik } from "formik";
import FormTextField from "../../components/FormTextField";

function RenderData({ link, editData }) {
	let initObj = editData
	let isNewData = false
	if (!initObj) {
		switch (link) {
			case path.users:
				initObj = createUserObj();
				break;
			case path.posts:
				initObj = createPostObj();
				break;
			case path.comments:
				initObj = createCommentObj();
				break;
		}
		isNewData = true
	}	
	return (
		<Formik
			initialValues={initObj}
			onSubmit={(values, formik) => {
				if (isNewData) {
					addData(path.users, values);
				} else {
					editData(path.users, values.id, values);
				}
				formik.resetForm();
			}}
			enableReinitialize			
			>
			{({values, handleChange, handleSubmit}) => (
				<>
					{Object.keys(initObj).map(
						(item, index) =>
							item !== "id" && (
								<FormTextField
									fieldname={item}
									handleChange={handleChange}
									values={values}
									key={index}
								/>
							)
					)					
					}
					<button onClick={handleSubmit}>
						{isNewData ? "Add" : "Edit"}
					</button>
				</>
			)}
		</Formik>
	);
}

export default RenderData;
