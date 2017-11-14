import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
  render(){
    return(
      <div className="App">
      	<MuiThemeProvider>
          {this.props.children}
      	</MuiThemeProvider>
      </div>
    );
  }
}
