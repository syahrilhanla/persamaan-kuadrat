import React, { useState, useRef, useEffect, useContext } from "react";
import "./DynamicForm.css";
import "./Button.css";
import { GlobalContext } from "./GlobalContext";
import { EquationsData } from "./EquationData";

export const DynamicForm = ({ isRandom }) => {
	const [valueA, setA] = useState("");
	const [valueB, setB] = useState("");
	const [valueC, setC] = useState("");
	const [valueD, setD] = useState("");
	const [valueX, setX] = useState({});

	const { pickedQuestion, questionsData } = useContext(GlobalContext);

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
		else calcResults();
	};

	const checkInput = (value) => {
		const isNotNum = isNaN(value);
		const isMinus = value.includes("-");
		if (isNotNum && !isMinus) alert("not a number!");
	};

	const ShowEquation = () => {
		let a = valueA;
		let b = valueB;
		let c = valueC;

		// console.log(a, b, c);

		const displayA = () => {
			if (a === "0") {
				return "";
			} else if (a === "") {
				return (
					<span>
						<EquationsData text='ax^2 + ' />
					</span>
				);
			} else if (a === "1") {
				return (
					<span>
						<EquationsData text='x^2 + ' />
					</span>
				);
			} else {
				return (
					<span>
						<EquationsData text={`${a}x^2 + `} />
					</span>
				);
			}
		};

		const displayB = () => {
			if (b === "0") {
				return ''
			} else if (b === "") return (
				<span>
					<EquationsData text={` bx + `} />
				</span>
			)
			else if (b === "1") {
				return (
					<span>
						<EquationsData text={` x + `} />
					</span>
				)
			} else if (b.includes("-") || (b < 0)) return (
				<span>
					<EquationsData text={` (${b})x + `} />
				</span>
			)
			else {
				return (
					<span>
						<EquationsData text={` ${b}x + `} />
					</span>
				)
			}
		};

		const displayC = () => {
			if (c === "0") {
				return "";
			} else if (c === "") return (
				<span>
					<EquationsData text={`c`} />
				</span>
			)
			else if (c === "1") return (
				<span>
					<EquationsData text={`1`} />
				</span>
			)
			else if (c.includes("-") || (c < 0)) return (
				<span>
					<EquationsData text={`(${c})`} />
				</span>
			)
			else return (
				<span>
					<EquationsData text={`${c}`} />
				</span>
			)
		};

		return (
			<>
				<h3>
					{displayA()}
					{displayB()}
					{displayC()} = 0
				</h3>

			</>
		);
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

	const calcResults = () => {
		if (valueA === "") setA(0);
		if (valueB === "") setB(0);
		if (valueC === "") setC(0);

		const a = (valueA);
		const b = (valueB);
		const c = (valueC);

		const D = Math.pow(b, 2) - 4 * a * c;
		console.log("D", D);

		setD(D);

		if (D > 0) {
			const x1 = ((-b + Math.sqrt(D)) / (2 * a)).toFixed(2);
			const x2 = ((-b - Math.sqrt(D)) / (2 * a)).toFixed(2);
			console.log(x1, x2);

			setX({
				x1,
				x2,
			});
			// console.log('valueX :>> ', valueX);
		} // eslint-disable-next-line
		else if (D == 0) {
			const x1 = (-b / (2 * a)).toFixed(2);
			const x2 = x1;
			setX({
				x1,
				x2,
			});
			// console.log('valueX :>> ', valueX);
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
			<ShowEquation />
			{valueD !== "" ? <ShowResults /> : null}
		</div>
	);
};
