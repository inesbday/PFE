import {
  ADD_MISSION,
  DELETE_MISSION,
  MODIFY_MISSION,
} from "../constants/missionsConstants";

import data from "./missionData";

const INITIAL_STATE = [...data];

const missions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, action.payload];

    case MODIFY_MISSION:
      const index = state.findIndex(
        (mission) => mission.id === action.payload.userID[0]
      );
      state[index].status = action.payload.status;
      return [...state];

    case DELETE_MISSION:
      const newMission = state.filter(
        (mission) => mission.id !== action.payload[0]
      );

      return newMission;

    default:
      return state;
  }
};

export default missions;
