import * as types from "../constants/actionTypes";

const initialState = {
  totalChores: 3,
  // choresList: [
  //   { choreId: 1, description: "Mow the lawn", assignedTo: "Billy", reward: 3 },
  //   {
  //     choreId: 2,
  //     description: "Do the dishes",
  //     assignedTo: "Billy",
  //     reward: 1,
  //   },
  //   {
  //     choreId: 3,
  //     description: "Finish book report",
  //     assignedTo: "Billy",
  //     reward: 2,
  //   },
  // ],

  choresList: [
    {
      id: "1",
      assignedTo: "Ozi",
      reward: "$2",
      status: "Pending",
      dateCreated: "Wed Jun 09 2021",
      description: "Finish Science Report",
    },
    {
      id: "2",
      assignedTo: "David",
      reward: "$3",
      status: "Completed",
      dateCreated: "Tue Jun 08 2021",
      description: "Give the dog a bath",
    },
    {
      id: "3",
      assignedTo: "Russ",
      reward: "$5",
      status: "For Review",
      dateCreated: "Mon Jun 07 2021",
      description: "Wash the car",
    },
  ],

  lastChoreId: 3,
  newChoreDescription: "",
};

const choresReducer = (state = initialState, action) => {
  let choresList;
  const statusChecker = () => {
    if (action.payload.verified_on !== null) {
      return "Completed";
    } else if (action.payload.completed_on !== null) {
      return "Awaiting Review";
    } else {
      return "Pending";
    }
  };

  switch (action.type) {
    case types.ADD_CHORE:
      console.log("inside the ADD_CHORE ACTION");
      // increment lastChoreId and totalChores counters
      const lastChoreId = state.lastChoreId + 1,
        totalChores = state.totalChores + 1;
      // create the new market object from provided data
      const newChore = {
        id: lastChoreId,
        assignedTo: action.payload.assigned_to,
        reward: action.payload.reward,
        status: statusChecker(),
        //not sure about this action.payload here...hangover from MegarMarkets
        description: action.payload.description,
        dateCreated: action.payload.created_at,
        //how we would be assign this?
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
