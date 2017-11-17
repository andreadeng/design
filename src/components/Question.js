import React from 'react';
import styled from 'styled-components';
import Option from '../components/Option';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

const Wrapper = styled.section`
  background: white;
  padding: 1em;
  width: 375px;
  border-radius: 16px;
  text-align: center;
  margin-bottom: 2em;
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  font-weight: bold;
  color: #252A34;
  margin-bottom: 1em;
  margin-top: 1em;
  padding-left: 1em;
  padding-right: 1em;
`;

const SubTitle = styled.h3`
  font-size: 1em;
  text-align: center;
  color: #393E46;
  margin: 0;
`;

const Input = styled.input`
  font-size: 1em;
  color: palevioletred;
  padding: 1em;
  background: white;
  border: none;
  border-radius: 25px;
  margin-bottom: 1em;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }

  @media (min-width: 1000px) {
    font-size: 1.5em;
  }
`;

const Label = styled.label`
  font-size: 2em;
`;

export default class Questions extends React.Component {
	constructor(props) {
    super(props);
    this.state = {};
  }

  toggleSelect_1 = () => () => {
    console.log('Selected option 1!')
    this.setState({selected_1: true});
    this.setState({selected_2: false});
    this.setState({selected_3: false});
    this.setState({selected_4: false});
  }

  toggleSelect_2 = () => () => {
    console.log('Selected option 2!')
    this.setState({selected_1: false});
    this.setState({selected_2: true});
    this.setState({selected_3: false});
    this.setState({selected_4: false});
  }

  toggleSelect_3 = () => () => {
    console.log('Selected option 3!')
    this.setState({selected_1: false});
    this.setState({selected_2: false});
    this.setState({selected_3: true});
    this.setState({selected_4: false});
  }

  toggleSelect_4 = () => () => {
    console.log('Selected option 4!')
    this.setState({selected_1: false});
    this.setState({selected_2: false});
    this.setState({selected_3: false});
    this.setState({selected_4: true});
  }

  render() {
      return (
        <Wrapper>
          <Avatar
            src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
            size={60}
          />
          <SubTitle> Dan asks </SubTitle>
          <Title> {this.props.questionTitle} </Title>
          <Option 
            selected={this.state.selected_1}
            onClickSelect={this.toggleSelect_1()}
            text={this.props.option_1}
          />
          <Option
            selected={this.state.selected_2}
            onClickSelect={this.toggleSelect_2()}
            text={this.props.option_2}
          />
          <Option 
            selected={this.state.selected_3}
            onClickSelect={this.toggleSelect_3()}
            text={this.props.option_3}
          />
          <Option
            selected={this.state.selected_4}
            onClickSelect={this.toggleSelect_4()}
            text={this.props.option_4}
          />
        </Wrapper>           
    );
  }
}