import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import { Link } from "react-router-dom";
import ParentsChildren from "../components/Parents/ParentsChildren.jsx";
// --------------------------------------------------------------------------------------------- //

const mapDispatchToProps = (dispatch) => ({
  //redux boilerplate
});

export default class ParentAdminContainer extends Component {
  constructor(props) {
    super(props);

    //refactor to handle redux. only using this to render parent or child component
  }

  render() {

    return (
      <div className='adminContainer'>
          <h2 className="scrumfan-heading">Household Members</h2>
          <ParentsChildren />
      </div>
    );
  }
}

// export default connect(null, mapDispatchToProps)(ParentContainer);
