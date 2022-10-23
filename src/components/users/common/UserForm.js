import {Form, useForm} from "../../../form/useForm";
import {Box, Grid} from "@mui/material";
import Input from "../../controls/Input";
import MuiButton from "../../controls/MuiButton";

const initialValues = {
  email: '',
  password: ''
}

export default function UserForm() {

  const {
    values,
    errors,
    setErrors,
    handleInputChange
  } = useForm(initialValues);

  const validate = () => {
    let temp = {};
    temp.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(values.email) ? "" : "This doesn't seem right"
    //password validation goes here
    setErrors({
      ...temp
    })
    return Object.values(temp).every( x => x == "");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert('test test 123');
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container item spacing={2} mt={1}>
        <Grid item xs={12}>
          <Input
            fullWidth
            required
            name="email"
            label="Email"
            autoComplete="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            fullWidth
            required
            name="password"
            label="Password"
            type="password"
            autoComplete="new-password"
            value={values.password}
            onChange={handleInputChange}
            error={errors.password}
          />
        </Grid>
        <Grid item xs={12} >
          <Box textAlign="center">
            <MuiButton
              type="submit"
              messageId="submit"
            />
          </Box>
        </Grid>
      </Grid>
    </Form>
  )

}