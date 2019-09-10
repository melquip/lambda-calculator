import React from "react";

const OperatorButton = ({ onClick, operator }) => {
	return (
		<button onClick={e => onClick(operator)}>
			{/* Display a button element rendering the data being passed down from the parent container on props */
				operator.char
			}
		</button>
	);
};

export default OperatorButton;