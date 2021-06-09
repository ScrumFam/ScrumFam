import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import choresReducer from "./reducers/choresReducer";
import usersReducer from "./reducers/usersReducer";

const reducers = combineReducers({
  chores: choresReducer,
  users: usersReducer,
});

const store = createStore(reducers, composeWithDevTools());

//TS bits on pause for now
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {chores: ChoresState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

export default store;
