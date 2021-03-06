import React, { useState, useRef, useEffect, useContext } from "react";
import "./DynamicForm.css";
import "./Button.css";
import { GlobalContext } from "./GlobalContext";
import { EquationsData } from "./EquationData";
import { ShowEquation } from "./ShowEquation";
import { calcResults } from "./calcResults";

export const DynamicForm = ({ isRandom }) => {
	const [valueA, setA] = useState("");
	const [valueB, setB] = useState("");
	const [valueC, setC] = useState("");
	const [valueD, setD] = useState("");
	const [valueX, setX] = useState({});

	const { pickedQuestion } = useContext(GlobalContext);

	// console.log(pickedQuestion);

	useEffect(() => {
		setA(pickedQuestion.map((item) => item.a));
		setB(pickedQuestion.map((item) => item.b));
		setC(pickedQuestion.map((item) => item.c));
	}, [pickedQuestion]);

	const refName = useRef("");
	useEffect(() => {
		refName.current.focus();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (valueA === "" || valueB === "" || valueC === "")
			alert("Fill all the fields!");
		else {
			const results = calcResults(valueA, valueB, valueC);
			setD(results.D);
			setX({ x1: results.x1, x2: results.x2 });
		}
	};

	const checkInput = (value) => {
		const isNotNum = isNaN(value);
		const isMinus = value.includes("-");
		if (isNotNum && !isMinus) alert("not a number!");
	};

	const ShowResults = () => {
		if (valueD > 0) {
			return (
				<div>
					<h3>D {`>`} 0, maka jenisnya adalah jenis akar real</h3>
					<h3>
						x1 = {valueX.x1}, x2 = {valueX.x2}
					</h3>
				</div>
			);
		} else if (valueD === 0) {
			return (
				<div>
					<h3>D {`=`} 0, maka terbukti akar real dan kembar</h3>
					<h3>
						x1 = {valueX.x1}, x2 = {valueX.x2}
					</h3>
				</div>
			);
		} else if (valueD < 0) {
			return (
				<h3>
					D {`<`} 0, maka akar persamaannya merupakan akar tidak real atau
					imajiner
				</h3>
			);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<p style={{ color: "red" }}>*If no value then fill the field with 0</p>
				<label>a = </label>
				<input
					type='text'
					placeholder='...'
					className='input-normal'
					value={
						isRandom === true ? pickedQuestion.map((item) => item.a) : valueA
					}
					disabled={isRandom === true ? true : false}
					onChange={(e) => {
						setA(e.target.value);
						checkInput(e.target.value);
					}}
					ref={refName}
				/>

				<label>b = </label>
				<input
					type='text'
					placeholder='...'
					className='input-normal'
					value={
						isRandom === true ? pickedQuestion.map((item) => item.b) : valueB
					}
					disabled={isRandom === true ? true : false}
					onChange={(e) => {
						setB(e.target.value);
						checkInput(e.target.value);
					}}
				/>

				<label>c = </label>
				<input
					type='text'
					placeholder='...'
					className='input-normal'
					value={
						isRandom === true ? pickedQuestion.map((item) => item.c) : valueC
					}
					disabled={isRandom === true ? true : false}
					onChange={(e) => {
						setC(e.target.value);
						checkInput(e.target.value);
					}}
				/>

				<input
					type='submit'
					className='button'
					value='Enter'
					style={{ padding: "6px 12px" }}
				/>
			</form>
			<ShowEquation a={valueA} b={valueB} c={valueC} />
			{valueD !== "" ? <ShowResults /> : null}
		</div>
	);
};
