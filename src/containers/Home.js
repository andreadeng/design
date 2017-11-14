import React from 'react';

import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


export default class Home extends React.Component {
  render() {
		return (
      <div className="Home">
        <AppBar
          title="Batto"
        />
        <br />
        <Card>
          <CardHeader
            title="Dan Wu"
            subtitle="The Planner"
            avatar="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
          />
          <Divider />
          <CardTitle title="When can you do Houdini Escape?" />
          <CardText>
            <List>
              <ListItem
                leftCheckbox={<Checkbox />}
                primaryText="Fri, November 2"
              />
              <Divider />
              <ListItem
                leftCheckbox={<Checkbox />}
                primaryText="Sat, November 3"
              />
              <Divider />
              <ListItem
                leftCheckbox={<Checkbox />}
                primaryText="Fri, November 9"
              />
              <Divider />
              <ListItem
                leftCheckbox={<Checkbox />}
                primaryText="Sat, November 10"
              />
            </List>
          </CardText>
        </Card>
      </div>
    );
	}
}
