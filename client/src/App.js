import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container text>
        <Header as="h2" textAlign="center">
          React Axios Tutorial
        </Header>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu.
        </p>
      </Container>
    );
  }
}

export default App;
