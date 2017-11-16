import React from 'react';
import styled from 'styled-components';
import Question from '../components/Question';

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

  toggleSelect_1 = () => () => {
    console.log('Selected option 1!')
    this.setState({selected_1: !this.state.selected_1});
  }

  toggleSelect_2 = () => () => {
    console.log('Selected option 2!')
    this.setState({selected_2: !this.state.selected_2});
  }

  toggleSelect_3 = () => () => {
    console.log('Selected option 3!')
    this.setState({selected_3: !this.state.selected_3});
  }

  toggleSelect_4 = () => () => {
    console.log('Selected option 4!')
    this.setState({selected_4: !this.state.selected_4});
  }

  render() {
      return (
      <Background>
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