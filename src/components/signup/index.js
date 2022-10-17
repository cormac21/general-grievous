import {Button, Container, Grid, TextField, Typography} from "@mui/material";
import {FormattedMessage} from "react-intl";
import {Form} from "../../form/useForm";
import {Link} from "react-router-dom";

export default function Signup() {

  return (
    <Container maxWidth="xs">
      <Grid container mt={4} spacing={1}>
        <Grid item xs={12} >
          <Typography component="h1" variant="h5" textAlign='center'>
            <FormattedMessage id="signup" />
          </Typography>
        </Grid>
        <Form >
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, my: 2 }}
              >
                <FormattedMessage id="submit" />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Link to="/login" >
                <Typography textAlign='center'>
                  <FormattedMessage id="already_signedup" />
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Form>
      </Grid>
    </Container>
  )
}
