import React from "react";

export default function useForm(inputValues = {}) {
  const [values, setValues] = React.useState(inputValues);

  const handleChange = (event) => {
    const { value, id } = event.target;
    setValues({ ...values, [id]: value });
  };
  return { values, handleChange, setValues };
}
