import React, { Component } from "react";
import { Card, Form, Button } from "semantic-ui-react";
import axios from "axios";

export default class Create extends Component {
  state = { name: "", port: "" };

  onChangeHostName = e => {
    console.log("Host Name is changing...", e.target.value);
    this.setState({ name: e.target.value });
  };

  onChangePort = e => {
    console.log("Port Number is changing...", e.target.value);
    this.setState({ port: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const serverport = { name: this.state.name, port: this.state.port };
    axios
      .post("http://localhost:4000/serverport/add", serverport)
      .then(res => console.log(res.data));
    this.setState({ name: "", port: "" });
  };

  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>Add New Server</Card.Header>
          <Form>
            <Form.Field>
              <label>Add Host Name:</label>
              <input
                type="text"
                value={this.state.name}
                onChange={this.onChangeHostName}
              />
            </Form.Field>
            <Form.Field>
              <label>Add Server Port:</label>
              <input
                type="text"
                value={this.state.port}
                onChange={this.onChangePort}
              />
            </Form.Field>
            <Button fluid type="submit" onClick={this.onSubmit}>
              Add Node Server
            </Button>
          </Form>
        </Card.Content>
      </Card>
    );
  }
}
