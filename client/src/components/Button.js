import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { checkingDs } from './DynamicForm';

import "./Button.css";

export const Button = ({ text, choice }) => {
	const { getQuestions, chooseNumber, pickDsOverZero, questionsData } = useContext(
		GlobalContext
	);

	const handleClick = async (choice) => {
		console.log(choice);
		if (choice === 2) {
			await getQuestions();
			await chooseNumber();
		} else if (choice === 1) {
			console.log('this is 1');
		} else if (choice === 3) {
			await getQuestions();
			pickDsOverZero();
		}
	};

	return (
		<>
			<button className='button' onClick={() => handleClick(choice)}>
				{text}
			</button>
		</>
	);
};
