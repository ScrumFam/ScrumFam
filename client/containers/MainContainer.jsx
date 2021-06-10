import React, { Component } from "react";
import { connect } from "react-redux";
import ChildContainer from "./ChildContainer.jsx";
import ParentContainer from "./ParentContainer.jsx";

/**
 * based on the user logged in, renders either the parent hub or the child hub
 *  get the session information from the server
 */

//uncomment when ready
const mapStateToProps = (state) => {
  //add pertinent state here
  return {
    choresList: state.chores.choresList,
    totalChores: state.chores.totalChores,
    totalUsers: state.users.totalUsers,
  };
};

class MainContainer extends Component {
  constructor(props) {
    super(props);

    //refactor to handle redux. only using this to render parent or child component
    this.setParent = this.setParent.bind(this);
  }

  //sets whether
  setParent(isParent) {
    return isParent ? (
      <ParentContainer
        totalChores={this.props.totalChores}
        choresList={this.props.choresList}
        totalUsers={this.props.totalUsers}
      />
    ) : (
      <ChildContainer choresList={this.props.choresList} />
    );
  }

  render() {
    console.log(this.props);
    const renderContainer = this.setParent(false);
    return (
      <div>
        {/* <ParentContainer />
        <ChildContainer /> */}
        {renderContainer}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(MainContainer);
