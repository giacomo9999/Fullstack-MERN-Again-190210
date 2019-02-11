import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class TableRow extends Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.obj._id}</Table.Cell>
        <Table.Cell>{this.props.obj.name}</Table.Cell>
        <Table.Cell>{this.props.obj.port}</Table.Cell>
      </Table.Row>
    );
  }
}
export default TableRow;
