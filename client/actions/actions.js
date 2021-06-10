import * as types from "../constants/actionTypes";

export function addChoreActionCreator(chore) {
  console.log("inside add chore action creator");
  console.log(chore);
  return function (dispatch, getState) {
    return fetch("/chores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chore),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(`here's the data ${data}`);
        dispatch({
          type: types.ADD_CHORE,
          payload: data,
        });
      })
      .catch((error) =>
        console.log(`error in addChoreActionCreator: ${error}`)
      );
  };
}

export function verifyChoreActionCreator(chore) {
  console.log("inside verify chore action creator");
  console.log(chore);
  return function (dispatch, getState) {
    return fetch(`/chores/${chore.id}/complete`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chore),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(`here's the data ${data}`);
        dispatch({
          type: types.VERIFY_CHORE,
          payload: data,
        });
      })
      .catch((error) =>
        console.log(`error in verifyChoreActionCreator: ${error}`)
      );
  };
}

// export function updateChoresActionCreator(chore) {
//   console.log("inside this function");
//   return function (dispatch, getState) {
//     return fetch("/chores")
//       .then((data) => data.json())
//       .then((data) => {
//         console.log(`here's the data ${data}`);
//         dispatch({
//           type: types.ALLAN_TEST,
//           payload: data,
//         });
//       })
//       .catch((error) => console.log(`there's an error: ${error}`));
//   };
// }

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
