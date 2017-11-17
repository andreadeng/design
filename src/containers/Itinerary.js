import React from 'react';
import styled from 'styled-components';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const Container = styled.section`
  width: 400px;
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
  margin-left: 0.5em;
  margin-top: 1.5em;
`;

const Wrapper = styled.section`
  margin-top: 1.5em;
`;

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: 'https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/hot-pot-lao-cheng-yi-guo-2.w600.h315.2x.jpg',
    title: 'Around the table',
    author: 'jill111',
  },
  {
    img: 'https://www.discoverlosangeles.com/sites/default/files/media/Restaurants/little-sheep-mongolian-hot-pot.jpg',
    title: 'Yummy',
    author: 'pashminu',
  },
  {
    img: 'http://i.hungrygowhere.com/rnr/food/164224/226352/kin-n-34d33b64f0f703babe674febb9d61e60.jpg',
    title: 'Great food!!',
    author: 'Danson67',
  },
];

class Itinerary extends React.Component {

  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  render() {
    const {stepIndex} = this.state;

    return (
      <div className="Itinerary">
        <Container>
          <AppBar
            title="Batto"
          />
          <Title>Itinerary</Title>
          <Stepper
            activeStep={stepIndex}
            linear={false}
            orientation="vertical"
          >
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 0})}>
                4:00 PM - Buy groceries
              </StepButton>
              <StepContent>
                <h3>We need to get</h3>
                <List>
                  <ListItem
                    leftCheckbox={<Checkbox />}
                    primaryText="Fried chicken"
                    rightAvatar={<Avatar src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" />}
                  />
                  <ListItem
                    leftCheckbox={<Checkbox />}
                    primaryText="Meat"
                    rightAvatar={<Avatar src="https://avatarfiles.alphacoders.com/798/79894.jpg" />}
                  />
                  <ListItem
                    leftCheckbox={<Checkbox />}
                    primaryText="Veggies"
                    rightAvatar={<Avatar src="https://avatarfiles.alphacoders.com/798/79894.jpg" />}
                  />
                  <ListItem
                    leftCheckbox={<Checkbox />}
                    primaryText="Ice cream"
                    rightAvatar={<Avatar src="https://avatarfiles.alphacoders.com/798/79894.jpg" />}
                  />
                </List>
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 1})}>
                5:30 PM - Arrive at Dion's and start cookin!
              </StepButton>
              <StepContent>
                <Wrapper>
                  <div style={styles.root}>
                    <GridList style={styles.gridList} cols={2.2}>
                      {tilesData.map((tile) => (
                        <GridTile
                          key={tile.img}
                          title={tile.title}
                          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                          titleStyle={styles.titleStyle}
                          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                        >
                          <img src={tile.img} />
                        </GridTile>
                      ))}
                    </GridList>
                  </div>
                </Wrapper>
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 2})}>
                6:30 PM - Start feastin!!!!
              </StepButton>
              <StepContent>
                <p>
                  
                </p>
              </StepContent>
            </Step>
          </Stepper>
        </Container>
      </div>
    );
  }
}

export default Itinerary;