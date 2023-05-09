import React from "react";
import { Formik, Form, Field } from "formik";

import "./styles.css";
import { useDispatch } from "react-redux";
import { addContact } from "../Redux/Actions/contacts";
import { useNavigate } from "react-router-dom";

function CreateContact() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // declaring initialValues
  const initialValues = {
    firstName: "",
    lastName: "",
    status: "active",
  };

  // we don't require validation
  const validate = (values) => {};

  // taking the info as an object and dispatching
  // that in the action and after 1 second it navigates to home page
  const submitContact = (values) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      status: values.status,
    };
    dispatch(addContact(data));
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <React.Fragment>
      <div className="create-contact-container">
        {/* using tailwind css for styling forms, container and all */}
        <h2 className="text-pink-900 font-bold text-3xl">Create Contact</h2>
        <div className="form-container bg-pink-900">
          <Formik
            initialValues={initialValues}
            validate={(values) => validate(values)}
            onSubmit={(values) => submitContact(values)}
          >
            {/* taking errors and touched for validation */}
            {({ errors, touched }) => (
              <Form>
                {/* since we are using formik,
                we don't need the onChange method again */}
                <div className="flex flex-col mb-5">
                  <label htmlFor="firstName" className="label">
                    First Name
                  </label>
                  <Field
                    name="firstName"
                    type="text"
                    className="primary-input-field"
                    placeholder="Enter First name"
                  />
                </div>

                <div className="flex flex-col mb-5">
                  <label htmlFor="lastName" className="label">
                    Last Name
                  </label>
                  <Field
                    name="lastName"
                    type="text"
                    className="primary-input-field"
                    placeholder="Enter Last name"
                  />
                </div>

                <div className="flex flex-col mb-5">
                  <h3 className="label">status</h3>
                  <Field
                    as="select"
                    name="status"
                    className="primary-input-field"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">In-Active</option>
                  </Field>
                </div>
                <button
                  type="submit"
                  className="bg-white text-black w-full rounded w-100 py-1"
                >
                  Save Contact
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateContact;
