import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

import "./Button.css";

export const Button = ({ text, choice }) => {
	const { getQuestions, chooseNumber, pickedQuestion, fakeData, questionsData } = useContext(
		GlobalContext
	);

	const handleClick = async (choice) => {
		console.log(choice);
		if (choice === 2) {
			await getQuestions();
			await chooseNumber();
			console.log(pickedQuestion);
		} else if (choice === 1) {
			setTimeout(() => {
				console.log(fakeData);
			}, 3000);
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
