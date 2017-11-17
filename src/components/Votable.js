import React from 'react';
import styled from 'styled-components';
import FontIcon from 'material-ui/FontIcon';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';

const Wrapper = styled.section`
  background: white;
  padding: 1em;
  width: 375px;
  border-radius: 16px;
  margin-bottom: 2em;
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
  color: #252A34;
  margin-bottom: 1em;
  margin-top: 1em;
  padding-right: 1em;
`;

export default class Votable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Title>When to do Houdini Escape?</Title>
          <ListItem
            leftCheckbox= {<Checkbox
              checkedIcon={<FontIcon className="material-icons" color={"#4CAF50"}>check_circle</FontIcon>}
              uncheckedIcon={<FontIcon className="material-icons" color={"#CFD8DC"}>panorama_fish_eye</FontIcon>}
              defaultChecked
            />}
            primaryText="Friday, November 15"
            rightAvatar={<Avatar src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" />}
          />
          <Divider />
          <ListItem
            leftCheckbox= {<Checkbox
              checkedIcon={<FontIcon className="material-icons" color={"#4CAF50"}>check_circle</FontIcon>}
              uncheckedIcon={<FontIcon className="material-icons" color={"#CFD8DC"}>panorama_fish_eye</FontIcon>}
              defaultChecked
            />}
            primaryText="Saturday, November 16"
            rightAvatar={<Avatar src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" />}
          />
          <Divider />
          <ListItem
            leftCheckbox= {<Checkbox
              checkedIcon={<FontIcon className="material-icons" color={"#4CAF50"}>check_circle</FontIcon>}
              uncheckedIcon={<FontIcon className="material-icons" color={"#CFD8DC"}>panorama_fish_eye</FontIcon>}
            />}
            primaryText="Friday, November 15"
          />
          <Divider />
          <ListItem
            leftCheckbox= {<Checkbox
              checkedIcon={<FontIcon className="material-icons" color={"#4CAF50"}>check_circle</FontIcon>}
              uncheckedIcon={<FontIcon className="material-icons" color={"#CFD8DC"}>panorama_fish_eye</FontIcon>}
              defaultChecked
            />}
            primaryText="Saturday, November 16"
            rightAvatar={<Avatar src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" />}
          />
          <Divider />
        </Wrapper>
      </div>
    );
  }
}