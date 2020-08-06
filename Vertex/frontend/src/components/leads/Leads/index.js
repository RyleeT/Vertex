import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteLead } from "../../../actions/leads";
import AddLead from "../AddLead";
import { Title } from "./Styles";

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <Fragment>
        <Title className="d-flex justify-content-between">
          Leads
          <button
            className="btn btn-primary rounded mr-1"
            type="button"
            data-toggle="collapse"
            data-target="#addlead"
            aria-expanded="false"
            aria-controls="addlead"
          >
            Add Lead
          </button>
        </Title>
        <div className="collapse" id="addlead">
          <AddLead />
        </div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.leads.map((lead) => (
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.message}</td>
                  <td>
                    <button
                      onClick={this.props.deleteLead.bind(this, lead.id)}
                      className="btn btn-danger btn-sm rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
