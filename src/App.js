import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt'
    }
  }
  update( e ){
    this.setState({txt: e.target.value})
  }
  render(){
    return (
      <div>
        <Widget update={this.update.bind(this)} />
        <Button > I <Heart /> React</Button>
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}

const Widget = (props) =>
  <input type="text" onChange={props.update} />

const Button = (props) => <button>{props.children}</button>

const Title = (props) => <h1> Title: {props.text}</h1>

class Heart extends React.Component {
  render(){
    return <span> &hearts;</span>
  }
}

export default App