import { createContext, useReducer, useState } from "react";
import axios from "axios";

const AppReducer = (state, action) => {
	switch (action.type) {
		case "CHOOSING_NUMBER":
			return {
				...state,
				pickedQuestion: [action.payload],
			};
		case "FILL_QUESTIONS":
			// console.log(action.payload)
			return {
				...state,
				questionsData: action.payload,
			};
		default:
			return state;
	}
};

const initialState = {
	pickedQuestion: [],
	questionsData: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	// eslint-disable-next-line
	const [state, dispatch] = useReducer(AppReducer, initialState);
	let questionsList;
	const getQuestions = async () => {
		try {
			const res = await axios.get("/questions");
			questionsList = res.data.data
			// console.log(questionsList);

			dispatch({
				type: "FILL_QUESTIONS",
				payload: res.data.data,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const chooseNumber = () => {
		const ids = questionsList.map((item) => item);
		const pickNum = Math.floor(Math.random() * ids.length);

		dispatch({
			type: "CHOOSING_NUMBER",
			payload: ids[pickNum],
		});
	};

	return (
		<GlobalContext.Provider
			value={{
				pickedQuestion: state.pickedQuestion,
				chooseNumber,
				getQuestions,
				questionsData: state.questionsData
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
