import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ChildNavBar from '../components/Children/ChildNavBar.jsx';
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
  submitChoreForReview: (e) =>
    dispatch(actions.submitChoreForReviewActionCreator(e)),
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
    // console.log(this.props);

    // const listOfChores = [];
    // for (let i = 0; i < this.props.choresList.length; i++) {
    //   listOfChores.push(
    //     <li key={i} id={`chore_${i}`}>
    //       <input
    //         type="checkbox"
    //         id={`checkbox-${i}`}
    //         onClick={() => {
    //           const box = document.getElementById(`checkbox-${i}`);
    //           if (box.checked) {
    //             //adding a setTimeout so the user can see that the box has been checked briefly
    //             this.props.submitChoreForReview(this.props.choresList[i]);
    //             box.checked = false;
    //           }
    //         }}
    //       ></input>
    //       {this.props.choresList[i].description}
    //       <span className="chore-reward">
    //         ${this.props.choresList[i].reward}
    //       </span>
    //     </li>
    //   );
    // }

    return (
      <div className='childComp'>
        <ChildNavBar />
        
        <div className="parentsChildContainer childGrid">
        <div className="userBox back">
          <div className='childBox'>
            <p className='descriptionHeader'>Wash the car and fill it up an with gas</p>
            <p className='assignedAt'>Assigned at: Mon 27 2021</p>
            <div className='status'>
              <p>Reward: $1,000</p>
              <button className='btn'><CheckCircleIcon color="primary" fontSize='large'/>Completed</button>
            </div>
          </div>
        </div>
        <div className="userBox back">
          <div className='childBox'>
            <p className='descriptionHeader'>Wash the car and fill it up an with gas</p>
            <p className='assignedAt'>Assigned at: Mon 27 2021</p>
            <div className='status'>
              <p>Reward: $1,000</p>
              <button className='btn'><CheckCircleIcon color="primary" fontSize='large'/>Completed</button>
            </div>
          </div>
        </div>
        <div className="userBox back">
          <div className='childBox'>
            <p className='descriptionHeader'>Wash the car and fill it up an with gas</p>
            <p className='assignedAt'>Assigned at: Mon 27 2021</p>
            <div className='status'>
              <p>Reward: $1,000</p>
              <button className='btn'><CheckCircleIcon color="primary" fontSize='large'/>Completed</button>
            </div>
          </div>
        </div>
        <div className="userBox back">
          <div className='childBox'>
            <p className='descriptionHeader'>Wash the car and fill it up an with gas</p>
            <p className='assignedAt'>Assigned at: Mon 27 2021</p>
            <div className='status'>
              <p>Reward: $1,000</p>
              <button className='btn'><CheckCircleIcon color="primary" fontSize='large'/>Completed</button>
            </div>
          </div>
        </div>
        <div className="userBox back">
          <div className='childBox'>
            <p className='descriptionHeader'>Wash the car and fill it up an with gas</p>
            <p className='assignedAt'>Assigned at: Mon 27 2021</p>
            <div className='status'>
              <p>Reward: $1,000</p>
              <button className='btn'><CheckCircleIcon color="primary" fontSize='large'/>Completed</button>
            </div>
          </div>
        </div>
        <div className="userBox back">
          <div className='childBox'>
            <p className='descriptionHeader'>Wash the car and fill it up an with gas</p>
            <p className='assignedAt'>Assigned at: Mon 27 2021</p>
            <div className='status'>
              <p>Reward: $1,000</p>
              <button className='btn'><CheckCircleIcon color="primary" fontSize='large'/>Completed</button>
            </div>
          </div>
        </div>
        <div className="userBox back">
          <div className='childBox'>
            <p className='descriptionHeader'>Wash the car and fill it up an with gas</p>
            <p className='assignedAt'>Assigned at: Mon 27 2021</p>
            <div className='status'>
              <p>Reward: $1,000</p>
              <button className='btn'><CheckCircleIcon color="primary" fontSize='large'/>Completed</button>
            </div>
          </div>
        </div>
        <div className="userBox back">
          <div className='childBox'>
            <p className='descriptionHeader'>Wash the car and fill it up an with gas</p>
            <p className='assignedAt'>Assigned at: Mon 27 2021</p>
            <div className='status'>
              <p>Reward: $1,000</p>
              <button className='btn'><CheckCircleIcon color="primary" fontSize='large'/>Completed</button>
            </div>
          </div>
        </div>
        <div className="userBox back">
          <div className='childBox'>
            <p className='descriptionHeader'>Wash the car and fill it up an with gas</p>
            <p className='assignedAt'>Assigned at: Mon 27 2021</p>
            <div className='status'>
              <p>Reward: $1,000</p>
              <button className='btn'><CheckCircleIcon color="primary" fontSize='large'/>Completed</button>
            </div>
          </div>
        </div>
        <div className="userBox back">
          <div className='childBox'>
            <p className='descriptionHeader'>Wash the car and fill it up an with gas</p>
            <p className='assignedAt'>Assigned at: Mon 27 2021</p>
            <div className='status'>
              <p>Reward: $1,000</p>
              <button className='btn'><CheckCircleIcon color="primary" fontSize='large'/>Completed</button>
            </div>
          </div>
        </div>
        <div className="userBox back">
          <div className='childBox'>
            <p className='descriptionHeader'>Wash the car and fill it up an with gas</p>
            <p className='assignedAt'>Assigned at: Mon 27 2021</p>
            <div className='status'>
              <p>Reward: $1,000</p>
              <button className='btn'><CheckCircleIcon color="primary" fontSize='large'/>Completed</button>
            </div>
          </div>
        </div>
        <div className="userBox back">
          <div className='childBox'>
            <p className='descriptionHeader'>Wash the car and fill it up an with gas</p>
            <p className='assignedAt'>Assigned at: Mon 27 2021</p>
            <div className='status'>
              <p>Reward: $1,000</p>
              <button className='btn'><CheckCircleIcon color="primary" fontSize='large'/>Completed</button>
            </div>
          </div>
        </div>
        
       
        
        
      </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(ChildContainer);
