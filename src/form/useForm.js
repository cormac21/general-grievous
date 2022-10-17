import React, {useState} from "react";

export function useForm(initialFormValues) {

  const [ values, setValues ] = useState(initialFormValues);

  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({
        ...values,
        [name]:value
    });
  }

  return {
    values,
    setValues,
    handleInputChange
  }
}

export function Form(props) {
  return (
    <form>
      {props.children}
    </form>
  )
}