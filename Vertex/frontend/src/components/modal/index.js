import React, { Component } from "react";
import { createPortal } from "react-dom";
import { withRouter } from "react-router-dom";
import { ModalWrapper } from "./Styles";

export class Modal extends Component {
  render() {
    return createPortal(
      <ModalWrapper onClick={() => this.props.history.goBack()}>
        {this.props.children}
      </ModalWrapper>,
      document.getElementById("modal")
    );
  }
}

export default withRouter(Modal);
