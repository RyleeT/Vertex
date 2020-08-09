import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { getTask, closeTask } from "../../../actions/kanban";
import Modal from "../../layout/Modal";
import { Title } from "../../common/Styles";
import { Card, TaskTitle, Description, DescriptionBody } from "./Styles";

export class TaskDetails extends Component {
  static propTypes = {
    taskDetails: PropTypes.object.isRequired,
    getTask: PropTypes.func.isRequired,
    closeTask: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    await this.props.getTask(this.props.match.params.taskId);
  }

  componentWillUnmount() {
    this.props.closeTask();
  }

  render() {
    return (
      <Modal>
        <Card
          className="modal-content rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header border-0">
            <Title>Task-{this.props.taskDetails.id}</Title>
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
          <div className="modal-body">
            <TaskTitle>{this.props.taskDetails.title}</TaskTitle>
            <Description>Description</Description>
            <DescriptionBody>Coming soon...</DescriptionBody>
          </div>
        </Card>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  taskDetails: state.kanban.taskDetails,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  ...bindActionCreators({ getTask, closeTask }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
