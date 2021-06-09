import * as types from "../constants/actionTypes";

export const addChoreActionCreator = (chore) => ({
  type: types.ADD_CHORE,
  payload: chore,
});

export const addGoalActionCreator = (goal) => ({
  type: types.ADD_GOAL,
  payload: goal,
});

// export const addUserActionCreator = (user) => (
//   //const updatedFromDB = () => {
//     //fetch...
//   // }
// //return function that fetches the data and updates the payload. once the payload has been updated, dispatch the action to the reducer
//   {
//   type: types.ADD_USER,
//   payload: updateFromDB,
// });

export const addUserActionCreator = (user) => ({
  type: types.ADD_USER,
  payload: user,
});

export const submitChoreForReviewActionCreator = (chore) => ({
  type: types.SUBMIT_CHORE_FOR_REVIEW,
  payload: chore,
});
