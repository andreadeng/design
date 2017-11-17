import React from 'react';
import styled from 'styled-components';
import Question from '../components/Question';
import Votable from '../components/Votable';


const Background = styled.section`
  background: #364F6B;
  padding: 1em;
  height: 100%;
`;

export default class Questions extends React.Component {
	constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Background>
        <Votable />
        <Question 
          questionTitle = "What is my favorite food?"
          option_1 = "Fried chicken"
          option_2 = "Fried chicken 2"
          option_3 = "Fried chicken 3"
          option_4 = "Fried chicken 4"
        />

        <Question 
          questionTitle = "What is my favorite drink?"
          option_1 = "Taro milk tea"
          option_2 = "Taro milk tea 2"
          option_3 = "Taro milk tea 3"
          option_4 = "Taro milk tea 4"
        />
      </Background>
    );
  }
}