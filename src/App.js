import React, { Component } from 'react';
import './App.css';
import { Row, Col, Card, CardTitle } from 'react-materialize';
import IMG_20170107_153606 from "../public/assets/IMG_20170107_153606.jpg";


class App extends Component {
  render() {
    return (
      <Row className="App">
        <Header title="How Eriz love me today"/>
        <Moment image={IMG_20170107_153606} date="January 08, 2017" desc="lorem ipsum"/>
      </Row>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <Row>
        <Col s={12} m={12} l={12} className="App-header">
          <h2>{this.props.title}</h2>
        </Col>
      </Row>
    );
  }
}

class Moment extends Component {
  render() {
    return (
      <Col s={1} m={6} l={4} className="Moment" > 
        <Card header={<CardTitle reveal image={this.props.image} waves='reorder'/>}
            title={this.props.date}
            reveal={this.props.desc}>
            <p>January 8, 2017/ Tuesday</p>
        </Card>
      </Col>
    );
  }
}

export default App;
