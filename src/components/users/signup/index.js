import { Container, Grid, Typography} from "@mui/material";
import {FormattedMessage} from "react-intl";
import {useAuth} from "../../../context/AuthContext";
import UserForm from "../common/UserForm";
import {Link} from "react-router-dom";

export default function Signup() {



  const handleFormSuccess = () => {
    alert('Deu certo!')
  }

  const handleFormError = () => {
    alert('Deu errado')
  }

  return (
    <Container maxWidth="xs" >
      <Grid container mt={4} spacing={2}>
        <Grid item xs={12} >
          <Typography component="h1" variant="h5" textAlign='center'>
            <FormattedMessage id="signup" />
          </Typography>
        </Grid>
        <UserForm
          buttonMessageId="submit"
          onSuccess={handleFormSuccess}
          onError={handleFormError}
        />
        <Grid item xs={12} mt={4}>
          <Link to="/login">
            <Typography textAlign='center'>
              <FormattedMessage id="already_signedup"/>
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}
