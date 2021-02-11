import React, { useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';
import { EquationsData } from './EquationData';

export const QuestionList = () => {
  const { questionsData } = useContext(GlobalContext);

  const ShowEquation = ({ a, b, c }) => {

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
      } else if ((b < 0)) return (
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
      else if ((c < 0)) return (
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
  return (
    <div>
      <h2>Soal:</h2>
      {questionsData.map(question => {
        return (
          <>
            {/* <h3><span>{question.id}. {question.a} {question.b} {question.c}</span></h3> */}
            <ShowEquation a={question.a} b={question.b} c={question.c} />
          </>
        )
      })}
    </div>
  )
}
