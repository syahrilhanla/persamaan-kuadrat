import React, { useContext, useEffect, useState } from 'react';
import { EquationsData } from './EquationData';
import { GlobalContext } from './GlobalContext';

export const UserTesting = () => {
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const { valuesOverZero, questionsData } = useContext(GlobalContext);
  // console.log(valuesOverZero[0])

  useEffect(() => {
    // Getting the questions' ids if the D over 0
    const questionsID = questionsData.map(item => valuesOverZero[0].filter(questions => questions.id === item.id));
    // console.log(questionsID);

    // filtering questions when they're the same with questionsID
    const validQuestions = questionsID.filter(item => item.length > 0);
    const elements = validQuestions.map(item => item.map(element => element));
    const element = elements.map((item) => item[0]);
    // console.log('element', element)
    const filteredQuestions = element.map(atom => questionsData.filter(question => atom.id === question.id));
    // console.log(filteredQuestions);

    // Getting the questions' data
    const selectedQuestions = filteredQuestions.filter(item => item.length > 0);
    setFilteredQuestions(selectedQuestions);
    // console.log('selectedQuestions :>> ', selectedQuestions, element);

  }, [valuesOverZero]);

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

  const DisplayQuestions = ({ argument }) => {
    const option = filteredQuestions.map(item => item[0]);

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

  console.log(filteredQuestions)

  return (
    <div>
      <DisplayQuestions option={filteredQuestions} />
    </div>
  )
}
