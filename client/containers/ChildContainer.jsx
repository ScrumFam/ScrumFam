import React, { Component } from 'react';
import { connect } from 'react-redux';




/**
 * Approach:
 * complete task:
 *  view tasks available and submit them for completion / review
 *
 *  View open tasks
 *    GET request for open tasks in the households
 */


class ChildContainer extends Component {
  constructor(props) {
    super(props);

    //refactor to handle redux. only using this to render parent or child component
  }

  render(){
    console.log(this.props);

    return (
      <div>
        Hey it's a Child
      </div>
    )
  }
}


export default ChildContainer;