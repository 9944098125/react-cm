import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from "./Types";

export const addContact = (data) => async (dispatch) => {
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
  try {
    dispatch({
      type: REMOVE_CONTACT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
