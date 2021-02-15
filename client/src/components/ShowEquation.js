import React from "react";
import { EquationsData } from "./EquationData";

export const ShowEquation = ({ a, b, c }) => {
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
			return "";
		} else if (b === "")
			return (
				<span>
					<EquationsData text={` bx + `} />
				</span>
			);
		else if (b === "1") {
			return (
				<span>
					<EquationsData text={` x + `} />
				</span>
			);
		} else if (b < 0)
			return (
				<span>
					<EquationsData text={` (${b})x + `} />
				</span>
			);
		else {
			return (
				<span>
					<EquationsData text={` ${b}x + `} />
				</span>
			);
		}
	};

	const displayC = () => {
		if (c === "0") {
			return "";
		} else if (c === "")
			return (
				<span>
					<EquationsData text={`c`} />
				</span>
			);
		else if (c === "1")
			return (
				<span>
					<EquationsData text={`1`} />
				</span>
			);
		else if (c < 0)
			return (
				<span>
					<EquationsData text={`(${c})`} />
				</span>
			);
		else
			return (
				<span>
					<EquationsData text={`${c}`} />
				</span>
			);
	};

	return (
		<>
			<h3>
				{displayA()}
				{displayB()}
				{displayC()} <EquationsData text={` = 0`} />
			</h3>
		</>
	);
};
