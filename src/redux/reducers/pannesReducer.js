import {
  ADD_PANNE,
  DELETE_PANNE,
  MODIFY_PANNE,
} from "../constants/pannesConstants";

import data from "./panneData/index";

const INITIAL_STATE = [...data];

const panne = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PANNE:
      return [...state, action.payload];

    case MODIFY_PANNE:
      const index = state.findIndex((panne) => panne.id === action.payload.id);
      state[index] = action.payload;
      return [...state];

    case DELETE_PANNE:
      const newPanne = state.filter((panne) => panne.id !== action.payload[0]);

      return newPanne;

    default:
      return state;
  }
};

export default panne;
