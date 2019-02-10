import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Header, Card, List, Divider } from "semantic-ui-react";
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
          <Card centered={true}>
            <Card.Content>
              <Card.Description>This is the App component.</Card.Description>
              <List>
                <List.Item>
                  <Link to={"/create"}>Create</Link>
                </List.Item>
                <List.Item>
                  <Link to={"/index"}>Index</Link>
                </List.Item>
              </List>
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
