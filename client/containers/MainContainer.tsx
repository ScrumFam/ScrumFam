import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChildContainer from './ChildContainer';
import ParentContainer from './ParentContainer';

/**
 * based on the user logged in, renders either the parent hub or the child hub
 *  get the session information from the server
 */

//for testing only, will delete once bound to state
// const parent = true;


//uncomment when ready
// const mapStateToProps = state => {
//   //add pertinent state here
//   return {

//   }
// }



class MainContainer extends Component {
  constructor(props) {
    super(props);

    //refactor to handle redux. only using this to render parent or child component
    this.setParent = this.setParent.bind(this);
  }

  //sets whether
  setParent(isParent){
    return isParent ? <ParentContainer /> : <ChildContainer />;
  }

  render(){
    console.log(this.props);
    const renderContainer = this.setParent(false);
    return (
      <div>
        {/* <ParentContainer />
        <ChildContainer /> */}
        {renderContainer}
      </div>
    )
  }
}

export default MainContainer;