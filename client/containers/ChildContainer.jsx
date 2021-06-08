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
    for (let i = 0; i < this.props.choresList.length; i++) {
      listOfChores.push(
        <li key={i} id={`chore_${i}`}>
          {this.props.choresList[i].description}
          <button id="submitChore" onClick={() => this.props.submitChore}>
            Submit
          </button>
        </li>
      );
    }

    return (
      <div className="temp-border">
        <h2 className="scrumfan-heading">ScrumFam!</h2>
        <h3>KIDS HUB</h3>

        <h3>CHORES</h3>
        <ul>{listOfChores}</ul>

        <h3>GOALS</h3>
        <h4>Your Goals</h4>
        <h5>Animal Crossing</h5>
        <img src="https://images-na.ssl-images-amazon.com/images/I/51QaTC3UdES._SY430_SX215_QL70_FMwebp_.jpg"></img>
        <p>$40</p>
        <p>Progress bar go here....</p>

        <h4>Add A Goal!</h4>
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
      </div>
    );
  }
}

export default ChildContainer;
