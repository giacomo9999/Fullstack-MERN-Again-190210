import React, { Component } from "react";
import { Card, Table } from "semantic-ui-react";
import axios from "axios";
import TableRow from "./TableRow";

export default class Index extends Component {
  state = { serverports: [] };

  componentDidMount() {
    axios
      .get("http://localhost:4000/serverport")
      .then(response => {
        this.setState({ serverports: response.data });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  tabRow() {
    return this.state.serverports.map(function(object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>This is the Index component.</Card.Header>
          <Table size="small" striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Port</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>{this.tabRow()}</Table.Body>
          </Table>
        </Card.Content>
      </Card>
    );
  }
}
