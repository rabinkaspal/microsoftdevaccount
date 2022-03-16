import React from "react";
const Form = () => {
	const [formData, setFormData] = React.useState({
		firstName: "",
		lastName: "",
		email: "",
		comments: "",
		isFriendly: true,
		employment: "",
	});

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		setFormData((prevData) => {
			return {
				...prevData,
				[name]: type === "checkbox" ? checked : value,
			};
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		//submit formData here
		console.log(formData);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Fill the form</h2>
				<input
					type="text"
					name="firstName"
					value={formData.firstName}
					onChange={handleChange}
					placeholder="First Name"
				/>
				<input
					type="text"
					name="lastName"
					value={formData.lastName}
					onChange={handleChange}
					placeholder="Last Name"
				/>
				<input
					type="text"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="Email"
				/>
				<textarea
					name="comments"
					value={formData.comments}
					onChange={handleChange}
					placeholder="COmments"
				></textarea>
				<input
					type="checkbox"
					id="isFriendly"
					name="isFriendly"
					checked={formData.isFriendly}
					onChange={handleChange}
				/>
				&nbsp;
				<label htmlFor="isFriendly">Are you Friendly?</label>
				<fieldset>
					<legend>Employment Status</legend>
					<input
						type="radio"
						id="fullTime"
						name="employment"
						value="Full time"
						checked={formData.employment === "Full time"}
						onChange={handleChange}
					/>
					<label htmlFor="fullTime">Full Time</label> <br />
					<input
						type="radio"
						id="partTime"
						name="employment"
						value="Part time"
						checked={formData.employment === "Part time"}
						onChange={handleChange}
					/>
					<label htmlFor="partTime">Part Time</label> <br />
					<input
						type="radio"
						id="unemployed"
						name="employment"
						value="Unemployed"
						checked={formData.employment === "Unemployed"}
						onChange={handleChange}
					/>
					<label htmlFor="unemployed">Unemployed</label> <br />
				</fieldset>
				<button>Submit Form</button>
			</form>
		</div>
	);
};

export default Form;
