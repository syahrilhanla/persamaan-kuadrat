import { createContext, useReducer } from "react";
import axios from "axios";

const AppReducer = (state, action) => {
	switch (action.type) {
		case "CHOOSING_NUMBER":
			return {
				...state,
				pickedQuestion: [action.payload],
			};
		case "PICKING_OVER_ZEROS":
			return {
				...state,
				valuesOverZero: [action.payload],
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
	questionsData: [],
	valuesOverZero: []
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

	const pickDsOverZero = () => {
		try {
			const checkingDs = (array) => {

				const valuesOfD = array.map((item) => {
					const D = Math.pow(item.b, 2) - 4 * item.a * item.c;
					return { D, id: item.id };
				});

				// console.log(valuesOfD);
				return valuesOfD;
			}

			const checkingDValues = () => {
				const Ds = checkingDs(state.questionsData);

				const valuesOverZero = Ds.filter(item => {
					const values = item.D > 0
					return values;
				});
				// console.log('valuesOverZero :>> ', valuesOverZero);
				return valuesOverZero;
			}

			dispatch({
				type: 'PICKING_OVER_ZEROS',
				payload: checkingDValues()
			});
		} catch (error) {
			console.log("error:", error);
		}

	}

	return (
		<GlobalContext.Provider
			value={{
				pickedQuestion: state.pickedQuestion,
				questionsData: state.questionsData,
				valuesOverZero: state.valuesOverZero,
				chooseNumber,
				getQuestions,
				pickDsOverZero,

			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
