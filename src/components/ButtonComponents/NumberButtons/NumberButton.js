import React from "react";

const NumberButton = ({ onClick, text }) => {
	return (
		<button className={Number(text) === 0 ? 'large' : null} onClick={e => onClick(text)}>
			{/* Display a button element rendering the data being passed down from the parent container on props */
				text
			}
		</button>
	);
};

export default NumberButton;