import { useFormik } from "formik";
import React from "react";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form Submitted! = ", values);
};

const validate = (values) => {
  /** NOTE : This validate function satisfied 3 conditions
   *  1. return object
   *  2. The key in error object must be same as values object
   *  3. The value of key in errors object must be string indicating what are error message
   *    e.g errors.name = "This field is required"
   */

  // values.name values.email values.channel
  const errors = {};
  // errors.name errors.email and errors.channel

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};

function YoutubeForm() {
  console.log("YoutubeForm Re-render");

  // NOTE : Here in initialValues key must be same as textbox value of name attribute
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  // console.log(`🚀 ~ Form values : `, formik.values);

  /** NOTE  : For form submission :
   *  1. onSubmit={formik.handleSubmit}
   *  2. onSumbit function in useFormik hook
   */

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          value={formik.values.channel}
          onChange={formik.handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
