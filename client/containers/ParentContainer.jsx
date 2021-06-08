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
  addChore: (e) => dispatch(actions.addChoreActionCreator(e)),
});

class ParentContainer extends Component {
  constructor(props) {
    super(props);

    //refactor to handle redux. only using this to render parent or child component
  }

  render() {
    console.log("*** ParentContainer.jsx", this.props);

    return (
      <div className="temp-border">
        <h2 className="scrumfan-heading">ScrumFam!</h2>
        <h3>PARENT HUB</h3>
        <h3>Enter a New Task</h3>
        <input id="chore-description"></input>
        <p>Select from existing users, or leave unassigned...</p>
        <label for="users">Assign to:</label>
        <select name="users" id="users">
          <option value="Alice">Alice</option>
          <option value="Billy">Billy</option>
          <option value="cara">Cara</option>
          <option value="unassigned">Unassigned Task</option>
        </select>
        <button
          onClick={(e) => {
            e.preventDefault();
            const choreField = document.getElementById("chore-description");
            const userDropdown = document.getElementById("users");
            this.props.addChore(...this.props.choresList, {
              assignedTo: userDropdown.value,
              description: choreField.value,
            });
          }}
        >
          Add Chore
        </button>
        <h3>CHORES</h3>
        <ul>
          <li>Task 1...</li>
          <li>Task 2...</li>
          <li>Task 3...</li>
        </ul>
        <h3>COMPLETED TASKS FOR REVIEW</h3>
        <ul>
          <li>Task 1...</li>
          <li>Task 2...</li>
        </ul>
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
