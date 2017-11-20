import React from 'react';
import QuestionPresentational from '../components/QuestionPresentational';
import { Button } from 'semantic-ui-react'

const OPTIONS = [
  {
    id: "1",
    value: "Fried chicken",
  }, {
    id: "2",
    value: "Fried chicken 2",
  }, {
    id: "3",
    value: "Fried chicken 3",
  }, {
    id: "4",
    value: "Fried chicken 4",
  },
];


export default class QuestionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: OPTIONS
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const falseOptions = this.state.options.map((option) => {
      var falseOption = Object.assign({}, option);
      falseOption.selected = false;
      return falseOption;
    });

    const i = this.state.options.findIndex(option => option.id === id);
    const option = this.state.options[i];

    const newOption = {
      ...option,
      selected: true
    };

    const newOptions= [
      ...falseOptions.slice(0, i),
      newOption,
      ...falseOptions.slice(i + 1)
    ];

    this.setState({
      options: newOptions
    });
  }

  render() {
    return (
      <div className="QuestionContainer">
        <Button primary>Primary</Button>
        <QuestionPresentational
          title="What's my favorite food?"
          options={this.state.options}
          onClick={this.handleClick}
        />
      </div>
    );
  }
};