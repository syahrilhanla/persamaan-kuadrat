import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import "./DynamicForm.css";
import "./Button.css";
import { ShowEquation } from "./ShowEquation";
import { calcResults } from "./calcResults";

export const UserTesting = () => {
	const [filteredQuestions, setFilteredQuestions] = useState([]);

	/* eslint-disable no-return-assign, no-param-reassign */
	const [x1, setX1] = useState("");
	const [y1, setY1] = useState("");
	const [x2, setX2] = useState("");
	const [y2, setY2] = useState("");
	const [x3, setX3] = useState("");
	const [y3, setY3] = useState("");
	const [x5, setX5] = useState("");
	const [y5, setY5] = useState("");
	const [x6, setX6] = useState("");
	const [y6, setY6] = useState("");
	const [x4, setX4] = useState("");
	const [y4, setY4] = useState("");
	const [x7, setX7] = useState("");
	const [y7, setY7] = useState("");
	const [x8, setX8] = useState("");
	const [y8, setY8] = useState("");
	const [x9, setX9] = useState("");
	const [y9, setY9] = useState("");
	const [answers, setAnswers] = useState(null);
	/* eslint-enable no-return-assign, no-param-reassign */
	const { valuesOverZero, questionsData } = useContext(GlobalContext);

	useEffect(() => {
		// Getting the questions' ids if the D over 0
		const questionsID = questionsData.map((item) =>
			valuesOverZero[0].filter((questions) => questions.id === item.id)
		);
		// console.log(questionsID);

		// filtering questions when they're the same with questionsID
		const validQuestions = questionsID.filter((item) => item.length > 0);
		const elements = validQuestions.map((item) =>
			item.map((element) => element)
		);
		const element = elements.map((item) => item[0]);
		// console.log('element', element)
		const filteredQuestions = element.map((atom) =>
			questionsData.filter((question) => atom.id === question.id)
		);
		// console.log(filteredQuestions);

		// Getting the questions' data
		const selectedQuestions = filteredQuestions.filter(
			(item) => item.length > 0
		);
		setFilteredQuestions(selectedQuestions);
		// console.log('selectedQuestions :>> ', selectedQuestions, element);
	}, [valuesOverZero]);

	console.log("rendering");

	const DisplayResult = ({ result }) => {
		return (
			<>
				<span>
					<h3>
						{result === true ? "Your Answer are Correct!" : "Wrong Answer"}
					</h3>
				</span>
			</>
		);
	};

	const handleClick = (index, answer) => {
		const x = eval(`x${index + 1}`);
		const y = eval(`y${index + 1}`);

		const parsedX = parseFloat(x).toFixed(2);
		const parsedY = parseFloat(y).toFixed(2);

		if (y == x) {
			console.log("both answers are the same");
		} else if (parsedX == answer.result.x1 || parsedX == answer.result.x2) {
			console.log("answer is right");
			setAnswers(true);
		} else if (parsedY == answer.result.x1 || parsedY == answer.result.x2) {
			console.log("answer is right");
			setAnswers(true);
		} else {
			console.log("answer is wrong");
		}
	};

	const handleChange = (stateName, value) => {
		switch (stateName) {
			case "x1":
				setX1(value);
				break;
			case "y1":
				setY1(value);
				break;
			case "x2":
				setX2(value);
				break;
			case "y2":
				setY2(value);
				break;
			case "x3":
				setX3(value);
				break;
			case "y3":
				setY3(value);
				break;
			case "x4":
				setX4(value);
				break;
			case "y4":
				setY4(value);
				break;
			case "x5":
				setX5(value);
				break;
			case "y5":
				setY5(value);
				break;
			case "x6":
				setX6(value);
				break;
			case "y6":
				setY6(value);
				break;
			case "x7":
				setX7(value);
				break;
			case "y7":
				setY7(value);
				break;
			case "x8":
				setX8(value);
				break;
			case "y8":
				setY8(value);
				break;
			case "x9":
				setX9(value);
				break;
			case "y9":
				setY9(value);
				break;

			default:
				break;
		}
	};

	const handleReset = (index) => {
		switch (index.toString()) {
			case "1":
				console.log(index);
				setX1("");
				setY1("");
				break;
			case "2":
				console.log(index);
				setX2("");
				setY2("");
				break;
			case "3":
				console.log(index);
				setX3("");
				setY3("");
				break;
			case "4":
				console.log(index);
				setX4("");
				setY4("");
				break;
			case "5":
				console.log(index);
				setX5("");
				setY5("");
				break;
			case "6":
				console.log(index);
				setX6("");
				setY6("");
				break;
			case "7":
				console.log(index);
				setX7("");
				setY7("");
				break;
			case "8":
				console.log(index);
				setX8("");
				setY8("");
				break;
			case "2":
				console.log(index);
				setX9("");
				setY9("");
				break;

			default:
				break;
		}
	};

	const InputFields = ({ firstColumn, secondColumn, index }) => {
		return (
			<>
				<label>x =</label>
				<input
					type='text'
					placeholder='...'
					className='input-normal'
					value={eval(firstColumn)}
					onChange={(e) => handleChange(firstColumn, e.target.value)}
					onFocus={(e) => e.target.focus()}
				/>
				{/* <span style={{ marginTop: "0.7rem" }}>or </span> */}
				<label> or </label>
				<input
					type='text'
					placeholder='...'
					className='input-normal'
					value={eval(secondColumn)}
					onChange={(e) => handleChange(secondColumn, e.target.value)}
				/>
				<button
					style={{ padding: "0.1rem 0.3rem", fontSize: "18px" }}
					className='button'
					onClick={() => handleClick(index)}
				>
					Check
				</button>
				<button
					style={{ padding: "0.1rem 0.3rem", fontSize: "18px" }}
					className='button'
				>
					Reset
				</button>
				{}
			</>
		);
	};

	const DisplayEquation = ({ index, item }) => {
		return (
			<>
				<span>
					<h2>{index + 1} :</h2>
					<ShowEquation a={item.a} b={item.b} c={item.c} />
				</span>
			</>
		);
	};

	return (
		<div>
			<p style={{ color: "red" }}>*Use "." for Decimal Format</p>
			{filteredQuestions.map((item, index) => {
				const answer = {
					result: calcResults(item[0].a, item[0].b, item[0].c),
					index: index + 1,
				};
				// console.log("answer :>> ", answer);

				return (
					<div style={{ width: "40%", margin: "auto" }} key={index}>
						<DisplayEquation index={index} item={item[0]} key={index} />
						<div style={{ display: "flex", justifyContent: "flex-start" }}>
							<form onSubmit={(e) => e.preventDefault()}>
								{/* <InputFields
									firstColumn={`x${index + 1}`}
									secondColumn={`y${index + 1}`}
									index={index}
									key={index}
								/> */}
								<label>x =</label>
								<input
									type='text'
									placeholder='...'
									className='input-normal'
									value={eval(`x${index + 1}`)}
									onChange={(e) =>
										handleChange(`x${index + 1}`, e.target.value)
									}
								/>
								{/* <span style={{ marginTop: "0.7rem" }}>or </span> */}
								<label> or </label>
								<input
									type='text'
									placeholder='...'
									className='input-normal'
									value={eval(`y${index + 1}`)}
									onChange={(e) =>
										handleChange(`y${index + 1}`, e.target.value)
									}
								/>
								<button
									style={{ padding: "0.1rem 0.3rem", fontSize: "18px" }}
									className='button'
									onClick={() => handleClick(index, answer)}
								>
									Check
								</button>
								<button
									style={{ padding: "0.1rem 0.3rem", fontSize: "18px" }}
									className='button'
									onClick={() => handleReset(index + 1)}
								>
									Reset
								</button>
								{answers === true ? <DisplayResult result={answers} /> : null}
							</form>
						</div>
						<hr />
					</div>
				);
			})}
		</div>
	);
};
