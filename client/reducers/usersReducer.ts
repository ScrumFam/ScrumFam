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
  totalUsers: 0,
  usersList: [],
  lastUserId: 10000,
  newUser: "",
};

const usersReducer = (state = initialState, action) => {
  let usersList;
  //   let totalCards = state.totalCards;
  //   const marketArr = state.marketList.slice();
  //   console.log(marketArr);
  switch (action.type) {
    case types.ADD_USER:
      //       // increment lastUserId and totalUsers counters
      const lastUserId = state.lastUserId + 1,
        totalUsers = state.totalUsers + 1;
      //       // create the new market object from provided data
      const newUser = {
        userId: lastUserId,
        //unsure about action.payload here...
        name: action.payload,
      };
      //       // push the new user onto a copy of the users list
      usersList = state.usersList.slice();
      usersList.push(newUser);
      //       // return updated state
      return {
        ...state,
        usersList,
        lastUserId,
        totalUsers,
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
