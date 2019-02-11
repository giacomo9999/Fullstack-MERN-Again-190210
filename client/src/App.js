import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Header, Card, Divider, Button } from "semantic-ui-react";
import Create from "./components/Create";
import Index from "./components/Index";

class App extends Component {
  render() {
    return (
      <Router>
        <Container text>
          <br />
          <Header as="h2" textAlign="center">
            React Axios Tutorial
          </Header>
          <Card fluid centered={true}>
            <Card.Content>
              <Button.Group fluid>
                <Button as={Link} to="/create">
                  Create
                </Button>
                <Button as={Link} to="/index">
                  Index
                </Button>
              </Button.Group>

              <Divider />
              <Switch>
                <Route exact path="/create" component={Create} />
                <Route path="/index" component={Index} />
              </Switch>
            </Card.Content>
          </Card>
        </Container>
      </Router>
    );
  }
}

export default App;
