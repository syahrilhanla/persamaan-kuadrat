import React, { useContext, useState } from 'react';
import { GlobalContext } from './GlobalContext';
import { EquationsData } from './EquationData';
import { Button } from './Button';

export const QuestionList = () => {
  const [option, setOption] = useState(0);
  const { questionsData } = useContext(GlobalContext);
  const firstHalf = (questionsData.slice(0, 6));
  const secondHalf = (questionsData.slice(6, 13));

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

  const DisplayQuestions = ({ option }) => {
    return (
      <>
        {
          option.map(question => {
            return (
              <div>
                <span>{question.id}: </span> <span><ShowEquation a={question.a} b={question.b} c={question.c} /></span>
              </div>
            )
          })
        }
      </>
    )
  }

  return (
    <div>
      <h2>Soal:</h2>
      <div><span onClick={() => setOption(1)} style={{ padding: '7px 12px' }}><Button text={'1'} /></span>
        <span onClick={() => setOption(2)} style={{ padding: '7px 12px' }}><Button text={'2'} /></span></div>
      {option === 1 ? <DisplayQuestions option={firstHalf} /> : option === 2 ? <DisplayQuestions option={secondHalf} /> : null}
    </div>
  )
} 
