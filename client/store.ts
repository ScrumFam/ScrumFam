import { configureStore } from "@reduxjs/toolkit";

import choreReducer from "./reducers/choresReducer";
import usersReducer from "./reducers/usersReducer";

const store = configureStore({
  reducer: {
    chores: choreReducer,
    users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {chores: ChoresState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
