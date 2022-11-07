import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton, styled,
  Toolbar
} from "@mui/material";
import ExploreIcon from '@mui/icons-material/Explore';
import {FormattedMessage} from "react-intl";
import NoUnderlineLink from "../util/NoUnderlineLink";
import {useAuth} from "../../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";

const LargeAppBar = () => {
  const {currentUser, logout} = useAuth();
  let navigate = useNavigate();
  console.log(currentUser);

  const LastLink = styled(Link)(({theme}) => ({
    marginLeft: theme.spacing(2)
  }))

  return (
    <Container sx={{
      maxWidth: 1132
    }}>
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid
              container
              item
              direction='row'
              alignItems='center'
              xs={12}
            >
              <Grid item xs={1}>
                <NoUnderlineLink to="/">
                  <IconButton
                    size="large">
                    <ExploreIcon sx={{color: '#ffffff'}}/>
                  </IconButton>
                </NoUnderlineLink>
              </Grid>
              {
                currentUser &&
                <Grid
                  item
                  container
                  xs={11}
                  mt='0'
                >
                  <Grid item container xs={11}>
                    <Grid item>
                      <NoUnderlineLink to="/orders">
                        <Button sx={{color: 'white'}}>
                          <FormattedMessage id="orders"/>
                        </Button>
                      </NoUnderlineLink>
                    </Grid>
                    <Grid item>
                      <NoUnderlineLink to="/my_account">
                        <Button sx={{color: 'white'}}>
                          <FormattedMessage id="my_account"/>
                        </Button>
                      </NoUnderlineLink>
                    </Grid>
                  </Grid>
                  <Grid item justifyContent="flex-end" xs={1}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => logout(() => navigate("/"))}
                    >
                      <FormattedMessage id="signout"/>
                    </Button>
                  </Grid>
                </Grid>
              }
              {
                !currentUser &&
                <Grid
                  item
                  container
                  justifyContent='flex-end'
                  xs={11}
                  mt='0'
                >
                  <Link to="/login">
                    <Button variant='contained' color='secondary'>
                      <FormattedMessage id="login"/>
                    </Button>
                  </Link>
                  <LastLink to="/signup">
                    <Button variant='contained'>
                      <FormattedMessage id="signup_yourself"/>
                    </Button>
                  </LastLink>
                </Grid>
              }
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  );
}

export default LargeAppBar;