import {
  ADD_PANNE,
  DELETE_PANNE,
  MODIFY_PANNE,
} from "../constants/pannesConstants";

export const addPanne = (payload) => {
  return {
    type: ADD_PANNE,
    payload,
  };
};

export const modifyPanne = (payload) => {
  return {
    type: MODIFY_PANNE,
    payload,
  };
};

export const deletePanne = (payload) => {
  return {
    type: DELETE_PANNE,
    payload,
  };
};
