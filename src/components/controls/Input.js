import {TextField} from "@mui/material";

export default function Input(props) {

  const { name, label, value, onChange, error = false, errorMessage } = props;

  return (
    <TextField
      variant="outlined"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={errorMessage || ""}
      {...props}
    />
  )
}