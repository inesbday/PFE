import { ADD_MISSION, DELETE_MISSION, MODIFY_MISSION } from "../constants/missionsActions";

export const addMission = (payload) => {
  return {
    type: ADD_MISSION,
    payload,
  };
};

export const modifyMission = (payload) => {
  return {
    type: MODIFY_MISSION,
    payload,
  };
};

export const deleteMission = (payload) => {
  return {
    type: DELETE_MISSION,
    payload,
  };
};
