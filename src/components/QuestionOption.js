import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  font-size: 1em;
  padding: 1em;
  border: 2px solid palevioletred;
  border-radius: 25px;
  width: 100%;
  cursor: pointer;
`;

const ButtonOption = Button.extend`
  text-align: left;
  margin-bottom: 0.25em;
  font-weight: regular;
  background: ${props => props.selected ? '#FC5185' : 'white'};
  border: 1px solid ${props => props.selected ? '#FC5185' : '#C9D6DF'};
  color: ${props => props.selected ? 'white' : '#393E46'};
  &:hover {
    background: ${props => props.selected ? '#FC5185' : '#F0F5F9'};
  }
`;

function QuestionOption(props) {
  return (
    <ButtonOption selected={props.selected} onClick={() => { props.onClick(props.id); }}>
      {props.value}
    </ButtonOption>
  );
}

export default QuestionOption;