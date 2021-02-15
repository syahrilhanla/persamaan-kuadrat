import React, { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { EquationsData } from "./EquationData";
import { Button } from "./Button";
import { ShowEquation } from "./ShowEquation";

export const QuestionList = () => {
	const [option, setOption] = useState(0);
	const { questionsData } = useContext(GlobalContext);
	const firstHalf = questionsData.slice(0, 6);
	const secondHalf = questionsData.slice(6, 13);

	const DisplayQuestions = ({ option }) => {
		return (
			<>
				{option.map((question) => {
					return (
						<div>
							<span>{question.id}: </span>{" "}
							<span>
								<ShowEquation a={question.a} b={question.b} c={question.c} />
							</span>
						</div>
					);
				})}
			</>
		);
	};

	return (
		<div>
			<h2>Soal:</h2>
			<div>
				<span onClick={() => setOption(1)} style={{ padding: "7px 12px" }}>
					<Button text={"1"} />
				</span>
				<span onClick={() => setOption(2)} style={{ padding: "7px 12px" }}>
					<Button text={"2"} />
				</span>
			</div>
			{option === 1 ? (
				<DisplayQuestions option={firstHalf} />
			) : option === 2 ? (
				<DisplayQuestions option={secondHalf} />
			) : null}
		</div>
	);
};
