import React, { Fragment } from "react";
import Leads from "./Leads";
import Board from "../kanban/Board";

export default function Dashboard() {
  return (
    <Fragment>
      <Leads />
      <Board />
    </Fragment>
  );
}
