import React from "react";

const OperatorButton = ({ onClick, operator }) => {
	return (
		<button onClick={e => onClick(operator.value)}>
			{/* Display a button element rendering the data being passed down from the parent container on props */
				operator.value
			}
		</button>
	);
};

export default OperatorButton;