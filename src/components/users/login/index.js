import {Container, Grid, Typography} from "@mui/material";
import {FormattedMessage} from "react-intl";
import UserForm from "../common/UserForm";
import {Link} from "react-router-dom";

export default function Login() {

  return (
    <Container maxWidth='xs' sx={{ padding: 2}}>
      <Grid container mt={4}>
        <Grid item xs={12} >
          <Typography component="h1" variant="h5" textAlign='center'>
            <FormattedMessage id="login" />
          </Typography>
        </Grid>
        <UserForm buttonMessageId="login" isLogin />
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
