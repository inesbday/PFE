import {
  ADD_USER,
  DELETE_USER,
  MODIFY_USER,
} from "../constants/usersConstants";

import data from "./userData";

const INITIAL_STATE = [...data];

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];

    case MODIFY_USER:
      const index = state.findIndex(
        (user) => user.id === action.payload.userID[0]
      );
      state[index].status = action.payload.status;
      return [...state];

    case DELETE_USER:
      const newUser = state.filter((USER) => user.id !== action.payload[0]);

      return newUser;

    default:
      return state;
  }
};

export default users;
