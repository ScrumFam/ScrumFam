import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import { Link } from "react-router-dom";
// --------------------------------------------------------------------------------------------- //

const mapDispatchToProps = (dispatch) => ({
  //redux boilerplate
});

export default class ParentContainer extends Component {
  constructor(props) {
    super(props);

    //refactor to handle redux. only using this to render parent or child component
  }

  render() {
    console.log("*** ParentContainer.jsx", this.props);

    return (
      <div>PARENT CONTAINER</div>
    );
  }
}

// export default connect(null, mapDispatchToProps)(ParentContainer);
