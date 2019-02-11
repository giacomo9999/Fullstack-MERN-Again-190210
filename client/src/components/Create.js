import React, { Component } from "react";
import { Card, Form, Button } from "semantic-ui-react";

export default class Create extends Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>Add New Server</Card.Header>
          <Form>
            <Form.Field>
              <label>Add Host Name:</label>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label>Add Server Port:</label>
              <input placeholder="Last Name" />
            </Form.Field>

            <Button type="submit">Submit</Button>
          </Form>
        </Card.Content>
      </Card>
    );
  }
}
