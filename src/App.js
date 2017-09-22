import React from 'react';
import AppBar from 'material-ui/AppBar';


class App extends React.Component {
  render(){
    return(
      <div className="App">
        <AppBar 
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        Yooooo
      </div>
    )
  }
}


export default App