import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";

import * as yup from "yup";

function SignUp() {
  const validate = yup.object({
    firstName: yup
      .string()
      .max(15, "15 characters or more")
      .required(" Required"),
    lastName: yup
      .string()
      .max(20, "20 characters or more")
      .required(" Required"),
    email: yup.string().email("Email is invalid").required("Email Required"),

    password: yup
      .string()
      .min(6, "Password too short")
      .required("Password Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          {console.log(formik.values)}

          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn-dark mt-3" type="submit">
              SignUp
            </button>
            <button className="btn btn-danger ml-3 mt-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default SignUp;
