import React from "react";

const SpecialButton = ({ onClick, text }) => {
	return (
		<button onClick={e => onClick(text)}>
			{/* Display a button element rendering the data being passed down from the parent container on props */
				text
			}
		</button>
	);
};

export default SpecialButton;