import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar
} from "@mui/material";
import ExploreIcon from '@mui/icons-material/Explore';
import {FormattedMessage} from "react-intl";
import NoUnderlineLink from "../util/NoUnderlineLink";
import {useAuth} from "../../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";

export default function LargeAppBar() {
  const {currentUser, logout} = useAuth();
  let navigate = useNavigate();

  return (
    <Container sx={{
      maxWidth: 1132
    }}>
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid
              container
              direction='row'
            >
              {currentUser ?
                <Grid
                  item
                  container
                  alignItems='center'
                  justifyContent='space-between'
                  mt='0'
                >
                  <Grid item>
                    <IconButton
                      size="large">
                      <Link to="/">
                        <ExploreIcon sx={{color: '#ffffff'}}/>
                      </Link>
                    </IconButton>
                    <NoUnderlineLink to="/orders">
                      <Button sx={{color: 'white'}}>
                        <FormattedMessage id="orders"/>
                      </Button>
                    </NoUnderlineLink>
                  </Grid>
                  <Grid item >
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => logout(() => navigate("/"))}
                    >
                      <FormattedMessage id="signout"/>
                    </Button>
                  </Grid>
                </Grid>
                :
                <Grid
                  item
                  container
                  justifyContent='space-between'
                  xs={12}
                  alignItems='center'
                >
                  <Grid item>
                    <IconButton
                      size="large">
                      <Link to="/">
                        <ExploreIcon sx={{color: '#ffffff'}}/>
                      </Link>
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <Link to="/signup">
                      <Button variant='contained' color='secondary'>
                        <FormattedMessage id="signup_yourself"/>
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              }
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  );
}
