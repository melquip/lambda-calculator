import React, { useState } from "react";

//import any components needed
import SpecialButton from './SpecialButton';
//Import your array data to from the provided data file
import { specials } from '../../../data';
const Specials = ({ onBtnClick }) => {
	// STEP 2 - add the imported data to state
	const [allSpecials, setSpecials] = useState(specials);
	return (
		<div>
			{
				/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component*/
				allSpecials.map(special => <SpecialButton key={special} text={special} onClick={onBtnClick} />)
			}
		</div>
	);
};

export default Specials;