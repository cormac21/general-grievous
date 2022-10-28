import {Form, useForm} from "../../../form/useForm";
import {Box, Grid} from "@mui/material";
import Input from "../../controls/Input";
import MuiButton from "../../controls/MuiButton";
import {useAuth} from "../../../context/AuthContext";

const initialValues = {
  email: '',
  password: ''
}

function UserForm(props) {

  const { buttonMessageId, onSuccess, onError, isLogin = false } = props;

  const {
    values,
    errors,
    setErrors,
    handleInputChange
  } = useForm(initialValues);

  const { signup, login } = useAuth();

  const validate = () => {
    let temp = {};
    temp.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(values.email) ? "" : "This doesn't seem right"
    //password validation goes here
    setErrors({
      ...temp
    })
    return Object.values(temp).every( x => x === "");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setErrors({});
      if (!isLogin) {

      }
    }
  }

  return (
    <Form >
      <Grid container item spacing={3} mt={1}>
        <Grid item xs={12}>
          <Input
            fullWidth
            required
            name="email"
            label="Email"
            autoComplete="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email !== undefined}
            errorMessage={errors.email}
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
            error={errors.password !== undefined}
            errorMessage={errors.password}
          />
        </Grid>
        <Grid item xs={12} mt={2} >
          <Box textAlign="center">
            <MuiButton
              type="submit"
              messageId={buttonMessageId}
              onClick={handleSubmit}
            />
          </Box>
        </Grid>
      </Grid>
    </Form>
  )

}

export default UserForm;