import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeContact } from "../Redux/Actions/contacts";
import EditContact from "./EditContact";

function Contacts() {
  const dispatch = useDispatch();
  // getting the contacts from reducer
  const allContacts = useSelector((state) => state.contacts.contacts);

  // declaring a variable that shows edit contact modal with id accordingly
  const [showEditContact, setShowEditContact] = React.useState({
    id: "",
    bool: false,
  });

  // console.log(allContacts);
  return (
    <React.Fragment>
      <div className="contacts-container">
        {/* this button is linked to create route */}
        <Link to="/create" style={{ color: "inherit", textDecoration: "none" }}>
          <button className="bg-pink-900 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
            Create Contact
          </button>
        </Link>
        <div className="contacts-list">
          {/* mapping allContacts from reducer */}
          {allContacts?.map((contact, idx) => (
            <div key={idx} className="flex flex-col my-5 mx-2">
              <div className="each-contact bg-pink-900">
                <h3 className="name">
                  {contact.firstName} {contact.lastName}
                </h3>
                <h5
                  className={`${
                    contact.status === "active"
                      ? "active status"
                      : "inactive status"
                  }`}
                >
                  {contact.status}
                </h5>
              </div>
              {/* on clicking this btn it shows the edit modal 
                    with the contact 
                    having the id on which the edit btn is clicked */}
              <button
                onClick={() =>
                  setShowEditContact({ id: contact.id, bool: true })
                }
                className="bg-pink-900 font-bold text-xl px-5 rounded text-white py-2 mb-2 editBtn"
              >
                Edit
              </button>
              {/* sending showEditContact and setShowEditContact as props for the */}
              {showEditContact.bool && (
                <EditContact
                  setShowEditContact={setShowEditContact}
                  showEditContact={showEditContact}
                />
              )}
              {/* deletes the contact */}
              <button
                onClick={() => dispatch(removeContact(contact.id))}
                className="bg-red-500 font-bold text-xl px-5 rounded text-white py-2 deleteBtn"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contacts;
