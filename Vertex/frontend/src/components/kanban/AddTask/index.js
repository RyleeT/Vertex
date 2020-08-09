import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTask } from "../../../actions/kanban";
import Modal from "../../layout/Modal";
import { FormWrapper, Title, Button, Label } from "../../common/Styles";

export class AddTask extends Component {
  state = {
    title: "",
  };

  static propTypes = {
    addTask: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.title]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const task = { title };
    this.props.addTask(task);
    this.setState({
      title: "",
    });
  };

  render() {
    const { title } = this.state;
    return (
      <Modal>
        <FormWrapper
          className="modal-content rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <Title>Add Issue</Title>
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
                <Label>Title</Label>
                <input
                  className="form-control rounded"
                  type="text"
                  title="title"
                  onChange={this.onChange}
                  value={title}
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

export default connect(null, { addTask })(AddTask);
