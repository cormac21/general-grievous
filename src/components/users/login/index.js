import {Container, Grid, Typography} from "@mui/material";
import {FormattedMessage} from "react-intl";
import UserForm from "../common/UserForm";
import {Link} from "react-router-dom";

export default function Login() {

  const handleLoginClick = () => {
    alert('Deu certo!')
  }

  return (
    <Container maxWidth="xs">
      <Grid container mt={4} spacing={1}>
        <Grid item xs={12} >
          <Typography component="h1" variant="h5" textAlign='center'>
            <FormattedMessage id="login" />
          </Typography>
        </Grid>
        <UserForm buttonMessageId="login" onSubmit={handleLoginClick} isLogin/>
        <Grid item xs={12} mt={4}>
          <Link to="/signup">
            <Typography textAlign='center'>
              <FormattedMessage id="no_account_yet"/>
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}
