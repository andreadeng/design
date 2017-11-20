import React from 'react';
import QuestionOption from '../components/QuestionOption';

function QuestionPresentational(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.options.map((option) => (
        <QuestionOption
          key={option.id}
          id={option.id}
          value={option.value}
          onClick={props.onClick}
          selected={option.selected}
        />
      ))}
    </div>
  );
}

export default QuestionPresentational;