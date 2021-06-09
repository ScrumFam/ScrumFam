import * as types from "../constants/actionTypes";

const initialState = {
  totalChores: 0,
  choresList: [
    { choreId: 1, description: "Mow the lawn", assignedTo: "Billy", reward: 3 },
    {
      choreId: 2,
      description: "Do the dishes",
      assignedTo: "Billy",
      reward: 1,
    },
    {
      choreId: 3,
      description: "Finish book report",
      assignedTo: "Billy",
      reward: 2,
    },
  ],
  lastChoreId: 10000,
  newChoreDescription: "",
};

const choresReducer = (state = initialState, action) => {
  let choresList;

  switch (action.type) {
    case types.ADD_CHORE:
      // increment lastChoreId and totalChores counters
      const lastChoreId = state.lastChoreId + 1,
        totalChores = state.totalChores + 1;
      // create the new market object from provided data
      const newChore = {
        choreId: lastChoreId,
        //not sure about this action.payload here...hangover from MegarMarkets
        description: action.payload.description,
        //how we would be assign this?
        assignedTo: action.payload.assignedTo,
      };
      // push the new chore onto a copy of the chores list
      choresList = state.choresList.slice();
      choresList.push(newChore);
      // return updated state
      //would we do a fetch here in order to update the DB simulatenously w/state update?
      return {
        ...state,
        choresList,
        lastChoreId,
        totalChores,
      };

    case types.SUBMIT_CHORE_FOR_REVIEW:
      console.log(action.payload);
      //add this task to the 'chores to review' state array for the corresponding parent user
      choresList = state.choresList.slice();
      choresList = choresList.filter((el) => {
        return el.choreId !== action.payload.choreId;
      });
      return {
        ...state,
        choresList,
      };

    case types.ALLAN_TEST:
      console.log("ACTION PAYLOAD COMING UP");
      console.log(action.payload);
      return {
        state,
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

export default choresReducer;
