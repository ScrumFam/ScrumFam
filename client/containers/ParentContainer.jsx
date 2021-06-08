import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

/**
 * Approach:
 * add task:
 *  design payload
 *    - user input vs data that is automatically serialized
 *  user input data:
 *    - chore
 *    - reward
 *    - assigned to -> should be a dropdown
 *    - weekly recurrence
 *  data
 *    - unique id
 *    - created by
 *
 *  View open tasks
 *    GET request for open tasks in the households
 */

const mapDispatchToProps = (dispatch) => ({
  addUser: (e) => dispatch(actions.addUserActionCreator(e)),
});

class ParentContainer extends Component {
  constructor(props) {
    super(props);

    //refactor to handle redux. only using this to render parent or child component
  }

  render() {
    console.log("*** ParentContainer.jsx", this.props);

    return (
      <div>
        <h3>Hey it's a parent</h3>
        <button
          onClick={(e) => {
            e.preventDefault();
            this.props.addUser(this.props.totalUsers + 1);
          }}
        >
          Click to increase users
        </button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(ParentContainer);
