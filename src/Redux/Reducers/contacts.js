import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from "../Actions/Types";

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
  errMessage: "",
};

export default function contacts(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CONTACT:
      {
        let flag = 0;
        // declaring the flag variable to be false
        if (payload.firstName === "" || payload.lastName === "") {
          state.errMessage = "Please Fill All The fields";
          console.log(state.errMessage);
          flag = 1;
          // changing the flag value to true
          // if the fields are empty giving a warning to user in console
          // if required I would have given the same validation in form itself in formik
        } else {
          state.contacts.forEach((el) => {
            if (
              el.firstName === payload.firstName &&
              el.lastName === payload.lastName
            ) {
              console.log("Name Already Exist In Contact");
              flag = 1;
              // again changing the flag value to true
              // checking the name not to be the same as in the records
            }
          });
        }

        if (!flag) {
          // if flag is false
          console.log("Contact Saved Successfully!!!");
          // updating the contacts list with the new contact added
          let updatedContacts =
            JSON.parse(localStorage.getItem("contacts")) || [];
          updatedContacts.push({
            id: state.contacts.length + 1,
            ...payload,
          });
          localStorage.setItem("contacts", JSON.stringify(updatedContacts));
          return {
            ...state,
            contacts: [...updatedContacts],
          };
        }
      }
      break;
    case EDIT_CONTACT: {
      if (payload.firstName === "" || payload.lastName === "") {
        // if the fields are remained the same then return same
        return state;
      } else {
        let flag = 0;
        // getting the contacts list in local storage
        let Contacts = JSON.parse(localStorage.getItem("contacts"));

        // if element of other id have the same updated name then show an alert
        Contacts.forEach((el) => {
          if (
            el.id != payload.id &&
            el.firstName === payload.firstName &&
            el.lastName === payload.lastName
          ) {
            alert("Name Already Exist!!");
            flag = 1;
            return state;
          }
        });

        if (flag) {
          return state;
        } else {
          // mapping the contacts array in the local storage and
          // in which contact the id's match for that contact having that id
          // the whole data gets updated to new contact added
          let updatedContacts = Contacts.map((el) => {
            if (el.id === payload.id) {
              return (el = { ...payload });
            } else {
              return el;
            }
          });
          localStorage.setItem("contacts", JSON.stringify(updatedContacts));
          console.log("Contact has been Updated");
          return {
            ...state,
            contacts: state.contacts.map((el) => {
              if (el.id === payload.id) {
                return { ...payload };
              } else {
                return el;
              }
            }),
          };
        }
      }
    }
    case REMOVE_CONTACT: {
      // removing contact in which the id matches with the id given in payload
      let Contacts = JSON.parse(localStorage.getItem("contacts"));
      let updatedContacts = Contacts.filter((el) => el.id !== payload.id);
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return {
        ...state,
        contacts: [...updatedContacts],
      };
    }
    default:
      return state;
  }
}
