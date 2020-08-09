import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../../actions/leads";
import Modal from "../../layout/Modal";
import { FormWrapper, Title, Button, Label } from "../../common/Styles";

export class AddLead extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <Modal>
        <FormWrapper
          className="modal-content rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <Title>Add Lead</Title>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => this.props.history.goBack()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body py-2">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <Label>Name</Label>
                <input
                  className="form-control rounded"
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  value={name}
                />
              </div>
              <div className="form-group">
                <Label>Email</Label>
                <input
                  className="form-control rounded"
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  value={email}
                />
              </div>
              <div className="form-group">
                <Label>Message</Label>
                <textarea
                  className="form-control rounded"
                  type="text"
                  name="message"
                  onChange={this.onChange}
                  value={message}
                />
              </div>
              <div className="form-group">
                <Button type="submit" className="btn">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </FormWrapper>
      </Modal>
    );
  }
}

export default connect(null, { addLead })(AddLead);
