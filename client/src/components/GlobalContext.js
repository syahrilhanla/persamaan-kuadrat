import { createContext, useReducer } from "react";
import axios from "axios";

const AppReducer = (state, action) => {
	switch (action.type) {
		case "CHOOSING_NUMBER":
			return {
				...state,
				pickedQuestion: [action.payload],
			};
		default:
			return state;
	}
};

const initialState = {
	pickedQuestion: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	// eslint-disable-next-line
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const getQuestions = async () => {
		try {
			const res = await axios.get("/questions");

			// Assigning results to global variable
			questionsList = res.data.data;
			console.log(questionsList);
		} catch (error) {
			console.log(error);
		}
	};

	let questionsList;

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
				questionsList: questionsList,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
