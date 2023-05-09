import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";

import { editContact } from "../Redux/Actions/contacts";
import "./styles.css";

function EditContact(props) {
  const id = props.showEditContact.id;
  console.log(useParams());
  const dispatch = useDispatch();
  //   console.log(id);
  const [initialValues, setInitialValues] = React.useState({
    id: id,
    firstName: "",
    lastName: "",
    status: "",
  });

  const allContacts = useSelector((state) => state.contacts.contacts);
  // console.log(allContacts);

  const handleChange = (e) => {
    setInitialValues({
      ...initialValues,
      [e.target.name]: e.target.value,
    });
  };

  const submitContact = () => {
    dispatch(editContact(initialValues));
    props.setShowEditContact(false);
  };

  React.useEffect(() => {
    allContacts.filter(
      (each) => Number(id) === Number(each.id) && setInitialValues(each)
    );
  }, [allContacts, id]);

  return (
    <React.Fragment>
      <div className="">
        <div className="bg-pink-900 box form-container">
          <form onSubmit={submitContact}>
            <div className="flex flex-col mb-5">
              <label htmlFor="firstName" className="label">
                First Name
              </label>
              <input
                name="firstName"
                value={initialValues.firstName}
                type="text"
                className="primary-input-field"
                placeholder="Enter First name"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col mb-5">
              <label htmlFor="lastName" className="label">
                Last Name
              </label>
              <input
                name="lastName"
                value={initialValues.lastName}
                type="text"
                className="primary-input-field"
                placeholder="Enter Last name"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col mb-5">
              <h3 className="label">status</h3>
              <select
                value={initialValues.status}
                name="status"
                className="primary-input-field"
                onChange={handleChange}
              >
                <option value="active">Active</option>
                <option value="inactive">In-Active</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-white text-black w-full rounded w-100 py-1"
            >
              Save Contact
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EditContact;
