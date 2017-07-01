import React from 'react';
import { Card, CardMedia, CardText } from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import heisenberg from '../assets/2.jpg'


const App = () => (
  <div className="main">
    <Card>

      <div className="title">Werner Heisenberg</div>

      <CardMedia>
        <img src={heisenberg} alt="Heisenberg guy"/>
      </CardMedia>

      <div className="items">
        <List className="listItem">
          <Subheader 
            style={{fontSize: "20px", color: "black", fontWeight: "700"}}>
            Some dates
          </Subheader>
          <ListItem>1901 - Was born</ListItem>
          <ListItem>1923 - Recieved a doctorate</ListItem>
          <ListItem>1932 - Got Nobel Prize in Physics</ListItem>
          <ListItem>1937 - Got married</ListItem>
          <ListItem>1976 - Died</ListItem>
        </List>

        <List className="listItem">
          <Subheader 
            style={{fontSize: "20px", color: "black", fontWeight: "700"}}>
            Some Awards
          </Subheader>
          <ListItem>Order of Merit of Bavaria</ListItem>
          <ListItem>Romano Guardini Prize</ListItem>
          <ListItem>Grand Cross for Federal Service with Star</ListItem>
          <ListItem>Knight of the Order of Merit (Civil Class)</ListItem>
          <ListItem>Nobel Prize in Physics</ListItem>
        </List>

        <List className="listItem">
          <Subheader 
            style={{fontSize: "20px", color: "black", fontWeight: "700"}}>
            Some sooks
          </Subheader>
          <ListItem>The Physical Principles of the Quantum Theory</ListItem>
          <ListItem>Das Naturbild der heutigen Physik</ListItem>
          <ListItem>Philosophic Problems of Nuclear Science</ListItem>
          <ListItem>Physics and Beyond: Encounters and Conversations</ListItem>
          <ListItem>Physik und Philosophie: Weltperspektiven</ListItem>

        </List>

        <List className="listItem">
          <Subheader 
            style={{fontSize: "20px", color: "black", fontWeight: "700"}}>
            Some institutions
          </Subheader>
          <ListItem>University of Göttingen</ListItem>
          <ListItem>University of Copenhagen</ListItem>
          <ListItem>University of Leipzig</ListItem>
          <ListItem>University of Berlin</ListItem>
          <ListItem>University of Munich</ListItem>
        </List>
      </div>

      <div className="moreInfo">
        If you would like to read some more, check out 
        <a href="https://en.wikipedia.org/wiki/Werner_Heisenberg"> Werner Heisenberg's wikipedia entry</a>.
      </div>

    </Card>
  </div>
);

export default App;

