import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions/actions";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

// --------------------------------------------------------------------------------------------- //

const mapDispatchToProps = (dispatch) => ({
  //redux boilerplate
});

export default class ParentsChildren extends Component {
  constructor(props) {
    super(props);

    //refactor to handle redux. only using this to render parent or child component
  }

  render() {

    return (
      <div className="parentsChildContainer">
        <div className="userBox">
          <img
            className='images'
            src="https://cdn.dribbble.com/users/230875/screenshots/12078079/media/c08285d2e039896a565cffeb5eb44a15.jpg?compress=1&resize=400x300"
            width="100px"
            height="100px"
          ></img>
          <p>Chores Completed: 5</p>
          <p>Chores In Progress: 10</p>
          <p>$1,000</p>
        </div>
        <div className="userBox">
          <img
            className='images'
            src="https://cdn.dribbble.com/users/230875/screenshots/12078079/media/c08285d2e039896a565cffeb5eb44a15.jpg?compress=1&resize=400x300"
            width="100px"
            height="100px"
          ></img>
          <p>Chores Completed: 5</p>
          <p>Chores In Progress: 10</p>
          <p>$1,000</p>
        </div>
        <div className="userBox">
          <img
            className='images'
            src="https://cdn.dribbble.com/users/230875/screenshots/12078079/media/c08285d2e039896a565cffeb5eb44a15.jpg?compress=1&resize=400x300"
            width="100px"
            height="100px"
          ></img>
          <p>Chores Completed: 5</p>
          <p>Chores In Progress: 10</p>
          <p>$1,000</p>
        </div>
        <div className="userBox">
          <img
            className='images'
            src="https://cdn.dribbble.com/users/230875/screenshots/12078079/media/c08285d2e039896a565cffeb5eb44a15.jpg?compress=1&resize=400x300"
            width="100px"
            height="100px"
          ></img>
          <p>Chores Completed: 5</p>
          <p>Chores In Progress: 10</p>
          <p>$1,000</p>
        </div>
        <div className="userBox">
          <img
            className='images'
            src="https://cdn.dribbble.com/users/230875/screenshots/12078079/media/c08285d2e039896a565cffeb5eb44a15.jpg?compress=1&resize=400x300"
            width="100px"
            height="100px"
          ></img>
          <p>Chores Completed: 5</p>
          <p>Chores In Progress: 10</p>
          <p>$1,000</p>
        </div>
        <div className="userBox registerUser">
          <img
            className='images'
            src="https://cdn.dribbble.com/users/230875/screenshots/12078079/media/c08285d2e039896a565cffeb5eb44a15.jpg?compress=1&resize=400x300"
            width="100px"
            height="100px"
          ></img>
            <TextField id="outlined-basic" label="Username" variant="outlined" size='small' />
            <TextField id="outlined-basic" label="Password" variant="outlined" size='small' />
            <button className='btn'><AddCircleRoundedIcon color="secondary" fontSize='large'/></button>
        </div>
      </div>
    );
  }
}

// export default connect(null, mapDispatchToProps)(ParentContainer);
