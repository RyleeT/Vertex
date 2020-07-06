import React, { Fragment } from "react";
import Form from "./Form";
import Leads from "./Leads";
import Board from "../kanban/Board";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Leads />
      <Board />
    </Fragment>
  );
}
