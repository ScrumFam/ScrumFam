import React, { Component } from "react";
import { connect } from "react-redux";

/**
 * Approach:
 * complete task:
 *  view tasks available and submit them for completion / review
 *
 *  View open tasks
 *    GET request for open tasks in the households
 */
const mapDispatchToProps = (dispatch) => ({
  addGoal: (e) => dispatch(actions.addGoalActionCreator(e)),
  submitChore: (e) => dispatch(actions.submitChoreActionCreator(e)),
});

class ChildContainer extends Component {
  constructor(props) {
    super(props);

    //refactor to handle redux. only using this to render parent or child component
    // this.submitChore = this.submitChore.bind(this);
  }

  // submitChore(){
  //   //this function will send a post request (or dispatch an action)
  //   console.log('*** submitting chore')
  // }

  render() {
    console.log(this.props);

    const listOfChores = [];
    // for (let i = 0; i < this.props.choresList.length; i += 1) {
    //   listOfChores[listOfChores.length] = (
    //     <li id={`chore_${i}`}>
    //       {listOfChores[i]}
    //       <button id="submitChore" onClick={() => this.props.submitChore}>
    //         Submit
    //       </button>
    //     </li>
    //   );
    // }

    return (
      <div className="temp-border">
        <h2 className="scrumfan-heading">ScrumFam!</h2>
        <h3>KIDS HUB</h3>
        <h4>Add Goals</h4>
        <input id="add-goal"></input>
        <input id="add-cost"></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            const goalDescription = document.getElementById("add-goal");
            const goalCost = document.getElementById("add-cost");
            this.props.addGoal({
              description: goalDescription.value,
              dollarValue: goalCost.value,
            });
          }}
        >
          Add Your Goal!
        </button>
        {/* <h3>Enter a New Task</h3>
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
            this.props.addChore({
              assignedTo: userDropdown.value,
              description: choreField.value,
            });
          }}
        >
          Add Chore
        </button> */}
        <h3>CHORES</h3>
        <ul>{listOfChores}</ul>
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

export default ChildContainer;
