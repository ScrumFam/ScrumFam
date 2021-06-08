import * as types from "../constants/actionTypes";

export const addChoreActionCreator = (chore) => ({
  type: types.ADD_CHORE,
  payload: chore,
});

export const addGoalActionCreator = (goal) => ({
  type: types.ADD_GOAL,
  payload: goal,
});

export const addUserActionCreator = (user) => ({
  type: types.ADD_USER,
  payload: user,
});
