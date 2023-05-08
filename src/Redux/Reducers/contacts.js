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
        if (payload.firstName === "" || payload.lastName === "") {
          state.errMessage = "Please Fill All The fields";
          flag = 1;
        } else {
          state.contacts.forEach((el) => {
            if (
              el.firstName === payload.firstName &&
              el.lastName === payload.lastName
            ) {
              console.log("Name Already Exist In Contact");
              flag = 1;
            }
          });
        }

        if (!flag) {
          console.log("Contact Saved Successfully!!!");

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
        return state;
      } else {
        let flag = 0;
        let Contacts = JSON.parse(localStorage.getItem("contacts"));

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
          let updatedContacts = Contacts.map((el) => {
            if (el.id === payload.id) {
              return (el = { ...payload });
            } else {
              return el;
            }
          });
          localStorage.setItem("contacts", JSON.stringify(updatedContacts));
          alert("Contact has been Updated");
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
