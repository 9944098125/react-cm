import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeContact } from "../Redux/Actions/contacts";

function Contacts() {
  const dispatch = useDispatch();
  const allContacts = useSelector((state) => state.contacts.contacts);

  // console.log(allContacts);
  return (
    <React.Fragment>
      <div className="contacts-container">
        <Link to="/create" style={{ color: "inherit", textDecoration: "none" }}>
          <button className="bg-pink-900 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
            Create Contact
          </button>
        </Link>
        <div className="contacts-list">
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
              <Link
                to={`/edit/${contact.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <button className="bg-pink-900 font-bold text-xl px-5 rounded text-white py-2 mb-2">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => dispatch(removeContact(contact.id))}
                className="bg-red-500 font-bold text-xl px-5 rounded text-white py-2"
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
