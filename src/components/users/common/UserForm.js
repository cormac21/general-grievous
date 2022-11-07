import { useState } from 'react'
import {Form, useForm} from "../../../form/useForm";
import {Alert, Box, Collapse, Grid, IconButton} from "@mui/material";
import Input from "../../controls/Input";
import MuiButton from "../../controls/MuiButton";
import {useAuth} from "../../../context/AuthContext";
import CloseIcon from '@mui/icons-material/Close';
import {useLocation, useNavigate} from 'react-router-dom';

const initialValues = {
  email: '',
  password: ''
}

function UserForm(props) {
  const { buttonMessageId, isLogin = false } = props;
  const {
    values,
    errors,
    setErrors,
    handleInputChange
  } = useForm(initialValues);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  let location = useLocation()
  let navigate = useNavigate()
  let from = location.state?.from?.pathname || "/";

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
      setLoading(true);
      try {
        login(values.email, values.password, () => {
          navigate(from, { replace: true });
        });
      } catch (err) {
        setErrorMessage('Algo deu errado ao fazer login!')
        console.log(err)
      }
      setLoading(false);
    }
  }

  function handleSignupSubmit (e) {
    e.preventDefault();
    if (validate()) {
      setErrors({});
      setLoading(true)
      try {
        signup(values.email, values.password);
      } catch (err) {
        setErrorMessage('Algo deu errado ao cadastrar este usuário!')
      }
      setLoading(false);
    }
  }

  return (
    <Form >
      <Grid container item spacing={3} mt={1}>
        { errorMessage && (
          <Collapse in={errorMessage}>
            <Grid item xs={12}>
              <Alert severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setErrorMessage('');
                    }}>
                    <CloseIcon />
                  </IconButton>
                }>
                {errorMessage}
              </Alert>
            </Grid>
          </Collapse>
        )}
        <Grid item xs={12}>
          <Input
            fullWidth
            required
            name="email"
            label="Email"
            value={values.email}
            autoComplete="off"
            onChange={handleInputChange}
            error={Object.prototype.hasOwnProperty.call('email', errors)}
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
            error={Object.prototype.hasOwnProperty.call('password', errors)}
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
                disabled={loading}
              />
            )}
            { !isLogin && (
              <MuiButton
                type="submit"
                messageId={buttonMessageId}
                onClick={handleSignupSubmit}
                disabled={loading}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Form>
  )

}

export default UserForm;