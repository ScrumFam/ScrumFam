import React, { Component } from 'react';
import { connect } from 'react-redux';




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


class ParentContainer extends Component {
  constructor(props) {
    super(props);

    //refactor to handle redux. only using this to render parent or child component
  }

  render(){
    console.log(this.props);

    return (
      <div>
        Hey it's a parent
      </div>
    )
  }
}


export default ParentContainer;