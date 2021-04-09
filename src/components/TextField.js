import React from "react";
import { ErrorMessage, useField } from "formik";

function TextField({ ...props }) {
  const [field, meta] = useField(props);
  console.log(field, meta);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{props.label}</label>
      <input
        className={`form-control shadow-none ${
          meta.error && meta.touch && "is-invalid"
        }`}
        autoComplete="off"
        {...field}
        {...meta}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
}

export default TextField;
