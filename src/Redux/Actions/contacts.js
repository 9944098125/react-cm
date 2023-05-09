import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from "./Types";

export const addContact = (data) => async (dispatch) => {
  // adding a contact, taking the user data as payload
  try {
    dispatch({
      type: ADD_CONTACT,
      payload: data,
    });
    console.log(data);
  } catch (err) {
    console.log("add contact error: ", err);
  }
};

export const editContact = (payload) => async (dispatch) => {
  // taking the user data as payload for now to update that in reducer
  try {
    dispatch({
      type: EDIT_CONTACT,
      payload,
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeContact = (id) => async (dispatch) => {
  // passing the id of contact to be deleted as payload and forwarded to reducer
  try {
    dispatch({
      type: REMOVE_CONTACT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
