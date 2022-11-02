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

  function handleLoginSubmit (e) {
    e.preventDefault();
    if (validate()) {
      setErrors({});
      try {
        login(values.email, values.password);
        onSuccess();
      } catch (err) {
        onError(err);
      }
    }
  }

  function handleSignupSubmit (e) {
    e.preventDefault();
    if (validate()) {
      setErrors({});
      try {
        signup(values.email, values.password);
        onSuccess();
      } catch (err) {
        onError(err);
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
            value={values.email}
            autoComplete="off"
            onChange={handleInputChange}
            error={errors.email !== undefined}
            helperText={errors.email}
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
            helperText={errors.password}
          />
        </Grid>
        <Grid item xs={12} mt={2} >
          <Box textAlign="center">
            { isLogin && (
              <MuiButton
                type="submit"
                messageId={buttonMessageId}
                onClick={handleLoginSubmit}
              />
            )}
            { !isLogin && (
              <MuiButton
                type="submit"
                messageId={buttonMessageId}
                onClick={handleSignupSubmit}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Form>
  )

}

export default UserForm;