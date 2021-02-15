import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

export const UserTesting = () => {
  const { valuesOverZero, questionsData } = useContext(GlobalContext);

  const questionsID = questionsData.map(item => valuesOverZero[0].filter(questions => questions.id === item.id));
  console.log(questionsID);

  const validQuestions = questionsID.filter(item => item.length > 0);
  console.log(validQuestions);
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
