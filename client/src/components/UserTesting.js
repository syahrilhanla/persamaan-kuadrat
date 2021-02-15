import React, { useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';

export const UserTesting = () => {
  const { valuesOverZero, questionsData } = useContext(GlobalContext);
  // console.log(valuesOverZero[0])

  useEffect(() => {
    // Getting the questions' ids if the D over 0
    const questionsID = questionsData.map(item => valuesOverZero[0].filter(questions => questions.id === item.id));
    console.log(questionsID);

    // filtering questions when they're the same with questionsID
    const validQuestions = questionsID.filter(item => item.length > 0);
    const elements = validQuestions.map(item => item.map(element => element));
    const element = elements.map((item) => item[0]);
    console.log('element', element)
    const filteredQuestions = element.map(atom => questionsData.filter(question => atom.id === question.id));
    console.log(filteredQuestions);

    const selectedQuestions = filteredQuestions.filter(item => item.length > 0);
    console.log('selectedQuestions :>> ', selectedQuestions);
  }, [valuesOverZero]);

  return (
    <div>
      {/* {questions.map((item) => (
        <h3>
          {item}
        </h3>
      ))} */}
    </div>
  )
}
