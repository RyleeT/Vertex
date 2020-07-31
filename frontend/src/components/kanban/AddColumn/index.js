import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addColumn } from "../../../actions/kanban";

export class AddColumn extends Component {
  state = {
    title: "",
    tasks: [],
  };

  static propTypes = {
    addColumn: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.title]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { title, tasks } = this.state;
    const column = { title, tasks };
    this.props.addColumn(column);
    this.setState({
      title: "",
    });
  };

  render() {
    const { title } = this.state;
    return (
      <div className="card card-body mb-2 rounded">
        <h2>Add Column</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control rounded"
              type="text"
              title="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addColumn })(AddColumn);
