import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AnimatedNumber from 'animated-number-react';

const mapStateToProps = (state) => {
    //add pertinent state here
    return {
      choresList: state.chores.choresList,
      totalChores: state.chores.totalChores,
      totalUsers: state.users.totalUsers,
    };
  };
   

class ChoresBox extends Component {
    constructor(props) {
      super(props);
     
    }

    
    render() {
    let array = [];
    const choresArray = this.props.choresList;
    console.log(choresArray)
    for(let i = 0; i < choresArray.length; i++){
     array.push(
        <div className="userBox back">
         <div className='childBox'>
         <p className='descriptionHeader'>{choresArray[i].description}</p>
         <p className='assignedAt'>{`Assigned at: ${choresArray[i].dateCreated}`}</p>
         <div className='status'>
             <p>{`Reward: ${choresArray[i].reward}`}</p>
             <button className='btn'><CheckCircleIcon color="primary" fontSize='large'/>{choresArray[i].status}</button>
         </div>
         </div>
      </div>
 )  
   
        }
      
       
      return (
        <div className='parentsChildContainer childGrid'>
               {array}
        </div>
     
       
        );
     }
  }

  export default connect(mapStateToProps, null)(ChoresBox);