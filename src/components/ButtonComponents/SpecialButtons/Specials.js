import React from "react";

//import any components needed

//Import your array data to from the provided data file
import { specials as dataSpecials } from '../data';
const Specials = () => {
	// STEP 2 - add the imported data to state
	const [specials, setSpecials] = useState(dataSpecials);
	return (
		<div>
			{
				/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component*/
				specials.map(special => <div key={special}>{special}</div>)
			}
		</div>
	);
};
