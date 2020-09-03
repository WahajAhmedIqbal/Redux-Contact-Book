import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from "../constant/types";

// Action
export const addContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
};

export const getcontact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

// update contact
export const updatecontact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

// DELETE CONTACT
export const deletecontact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});
