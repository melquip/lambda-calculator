import React from "react";

//import any components needed

//Import your array data to from the provided data file
import { operators as dataOperators } from '../data';


const Operators = () => {
	// STEP 2 - add the imported data to state
	const [operators, setOperators] = useState(dataOperators);
	return (
		<div>
			{
				/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component*/
				operators.map(operator => <div key={operator}>{operator}</div>)
			}
		</div>
	);
};
