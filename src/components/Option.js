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
  background: ${props => props.primary ? '#FC5185' : 'white'};
  border: 1px solid ${props => props.primary ? '#FC5185' : '#C9D6DF'};
  color: ${props => props.primary ? 'white' : '#393E46'};
  &:hover {
    background: ${props => props.primary ? '#FC5185' : '#F0F5F9'};
  }
`;

export default class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.selected && (
          <ButtonOption primary onClick={this.props.onClickSelect}>{this.props.text}</ButtonOption>
        )}
        {!this.props.selected && (
          <ButtonOption onClick={this.props.onClickSelect}>{this.props.text}</ButtonOption>
        )}
      </div>
    );
  }
}