import React, { useState } from "react";

//import any components needed
import OperatorButton from './OperatorButton';
//Import your array data to from the provided data file
import { operators } from '../../../data';

const Operators = ({ onBtnClick }) => {
	// STEP 2 - add the imported data to state
	const [allOperators, setOperators] = useState(operators);
	return (
		<div className="operators">
			{
				/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component*/
				allOperators.map(operator => <OperatorButton key={operator.char} operator={operator} onClick={onBtnClick} />)
			}
		</div>
	);
};

export default Operators;