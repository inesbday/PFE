import {
    ADD_USER,
    DELETE_USER,
    MODIFY_USER,
  } from "../constants/usersConstants";
  
  export const addUser = (payload) => {
    return {
      type: ADD_USER,
      payload,
    };
  };
  
  export const modifyUser = (payload) => {
    return {
      type: MODIFY_USER,
      payload,
    };
  };
  
  export const deleteUser = (payload) => {
    return {
      type: DELETE_USER,
      payload,
    };
  };
  