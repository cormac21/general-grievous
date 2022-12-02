import { useState } from 'react'
import {Form} from "../../../form/useForm";
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
  const [values, setValues] = useState(initialValues);
  const [validationErrors, setValidationErrors] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  let location = useLocation()
  let navigate = useNavigate()
  let from = location.state?.from?.pathname || "/";

  const { signup, login, error } = useAuth();

  const validate = () => {
    let temp = {};
    temp.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(values.email) ? "" : "This doesn't seem right"
    //password validation goes here
    setValidationErrors({
      ...temp
    })
    return Object.values(temp).every( x => x === "");
  }

  async function handleLoginSubmit (e) {
    e.preventDefault();
    if (validate()) {
      setValidationErrors({});
      setLoading(true);

      await login(values.email, values.password);
      if(error) {
        setErrorMessage('Credenciais inválidas! Verifique-as e tente novamente.')
      } else {
        navigate(from, { replace: true });
      }
      setLoading(false);
    }
  }

  function handleSignupSubmit (e) {
    e.preventDefault();
    if (validate()) {
      setValidationErrors({});
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
            onChange={(e) => setValues({...values, email: e.target.value})}
            error={validationErrors.email !== undefined}
            helperText={validationErrors?.email}
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
            onChange={(e) => setValues({...values, password: e.target.value})}
            error={Object.prototype.hasOwnProperty.call('password', validationErrors)}
            helperText={validationErrors?.password}
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