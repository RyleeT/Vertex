import React, { Fragment } from "react";
import Leads from "./Leads/index";

export default function Dashboard() {
  return (
    <Fragment>
      <div className="pt-4 pl-3 pr-3">
        <Leads />
      </div>
    </Fragment>
  );
}
