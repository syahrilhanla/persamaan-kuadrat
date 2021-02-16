import React, { useContext, useEffect, useState, useRef } from "react";
import { GlobalContext } from "./GlobalContext";
import "./DynamicForm.css";
import "./Button.css";
import { ShowEquation } from "./ShowEquation";

export const UserTesting = () => {
	const [filteredQuestions, setFilteredQuestions] = useState([]);
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
	const { valuesOverZero, questionsData } = useContext(GlobalContext);

	const x1Ref = useRef(null);
	// console.log(valuesOverZero[0])

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

	const handleClick = (index) => {
		console.log("x: ", eval(`x${index + 1}`), "y: ", eval(`y${index + 1}`));
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
			{/* <DisplayQuestions option={filteredQuestions} /> */}
			{filteredQuestions.map((item, index) => {
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
									onFocus={(e) => e.target.focus()}
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
									onClick={() => handleClick(index)}
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
							</form>
						</div>
						<hr />
					</div>
				);
			})}
		</div>
	);
};
