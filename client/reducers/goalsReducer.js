// /**
//  * ************************************
//  *
//  * @module  marketsReducer
//  * @author
//  * @date
//  * @description reducer for market data
//  *
//  * ************************************
//  */

import * as types from "../constants/actionTypes";

const initialState = {
  totalGoals: 0,
  goalsList: [],
  lastGoalId: 10000,
};

const usersReducer = (state = initialState, action) => {
  let goalsList;
  //   let totalCards = state.totalCards;
  //   const marketArr = state.marketList.slice();
  //   console.log(marketArr);
  switch (action.type) {
    case types.ADD_GOAL:
      //       // increment lastUserId and totalUsers counters
      const lastGoalId = state.lastGoalId + 1,
        totalGoals = state.totalGoals + 1;
      //       // create the new market object from provided data
      const newGoal = {
        goalId: lastGoalId,
        //unsure about action.payload here...
        description: action.payload.description,
        dollarValue: action.payload.dollarValue,
      };
      //       // push the new user onto a copy of the users list
      goalsList = state.goalsList.slice();
      goalsList.push(newGoal);
      //       // return updated state
      return {
        ...state,
        goalsList,
        lastGoalId,
        totalGoals,
      };
    //     case types.ADD_CARD:
    //       console.log(marketArr);
    //       console.log(action.payload);
    //       for (let i = 0; i < marketArr.length; i++) {
    //         if (marketArr[i].marketID == action.payload) {
    //           marketArr[i].cards += 1;
    //           totalCards += 1;
    //         }
    //       }
    //       return {
    //         ...state,
    //         totalCards,
    //         marketList: marketArr
    //       };
    //     case types.DELETE_CARD:
    //       for (let i = 0; i < marketArr.length; i++) {
    //         if (marketArr[i].marketID == action.payload
    //           && marketArr[i].cards > 0) {
    //           marketArr[i].cards -= 1;
    //           totalCards -= 1;
    //         }
    //       }
    //       return {
    //         ...state,
    //         totalCards,
    //         marketList: marketArr
    //       };
    default: {
      return state;
    }
  }
};

export default usersReducer;
