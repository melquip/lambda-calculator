import React, { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Display from './components/DisplayComponents/Display';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

import { numbers, operators, specials } from './data';

function App() {
	// STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
	// Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
	// Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
	// the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
	// Don't forget to pass the functions (and any additional data needed) to the components as props

	const [display, setDisplay] = useState("0");
	const [displayHistory, setHistory] = useState(["0"]);
	const calcBtnClickHandler = (button) => {
		let lastInput = displayHistory[displayHistory.length - 1];
		let currHistory = displayHistory;
		let currDisplay = display;
		let standardOperators = ['/', '*', '-', '+'];
		if(numbers.includes(button)) {
			if(button === "." && lastInput.includes(".")) {
				return false;
			}
			let _display = currDisplay.toString();
			let number = (
				_display === "0" || 
				standardOperators.includes(_display[_display.length - 1]) ? 
					button : _display + button
			);
			currHistory = displayHistory.concat(number);
			currDisplay = number;
		} else if(specials.includes(button)) {
			if(button === 'C') {
				currDisplay = 0;
				currHistory = [0];
			}
			if(button === "+/-") {
				currDisplay = Number(display) * -1;
				let changedHistory = [...displayHistory];
				changedHistory[changedHistory.length - 1] = currDisplay.toString();
				currHistory = changedHistory;
			}
			if(button === "%") {
				//setDisplay()
			}
		} else if(operators.includes(button)) {
			console.log(button);
			if(button.value !== '=') {
				if (lastInput !== button && standardOperators.includes(lastInput)) {
					let changedHistory = [...displayHistory];
					changedHistory[changedHistory.length - 1] = button.value;
					currHistory = changedHistory;
					currDisplay = Number(currHistory[currHistory.length - 2]) + ` ${button.value}`;
				} else if(lastInput !== button.value) {
					currHistory = displayHistory.concat(button.value);
					currDisplay += ` ${button.value}`;
				}
			} else {
				let lastOperatorIndex = -1;
				displayHistory.forEach((hist, i) => {
					if(standardOperators.includes(hist)) {
						lastOperatorIndex = i;
					}
				});
				if(lastOperatorIndex > -1) {
					let n1 = Number(displayHistory[lastOperatorIndex - 1]);
					let n2 = Number(currDisplay);
					let op = displayHistory[lastOperatorIndex];
					if(lastOperatorIndex === displayHistory.length - 1) {
						n2 = n1;
					}
					let newDisplay = eval(`${n1} ${op} ${n2}`);
					currHistory = [newDisplay.toString()];
					currDisplay = newDisplay;
				}
			}
		}

		console.log('displayHistory:', displayHistory);
		console.log('currHistory:', currHistory);
		setHistory(currHistory)
		setDisplay(currDisplay);
		return true;
	}

	const calculate = () => {

	}
	/*
	const findLastNumber = (attempt) => {
		let lastInput = displayHistory[displayHistory.length - attempt];
		if(operators.includes(lastInput)) {

		}
	}
	*/

	return (
		<div className="container">
			<Logo />
			<div className="App">
				{/* STEP 4 - Render your components here and be sure to properly import/export all files */
					
				}
				<Display display={display} />
				<div className="mainFlex">
					<div className="column">
						<Specials onBtnClick={calcBtnClickHandler} />
						<Numbers onBtnClick={calcBtnClickHandler} />
					</div>
					<div className="column">
						<Operators onBtnClick={calcBtnClickHandler} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
