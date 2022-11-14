import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import ProfileIcon from '@mui/icons-material/AccountCircleRounded';
import {FormattedMessage} from "react-intl";
import NoUnderlineLink from "../util/NoUnderlineLink";
import {useAuth} from "../../context/AuthContext";

export default function MobileAppBar() {
  const [anchorMenu, setAnchorMenu] = useState(null);
  const [anchorProfile, setAnchorProfile] = useState(null);
  const menuOpen = Boolean(anchorMenu);
  const profileOpen = Boolean(anchorProfile);
  const {currentUser, logout} = useAuth();
  let navigate = useNavigate();

  function handleSignoutClick() {
    logout(() => navigate("/"));
    setAnchorProfile(null);
  }

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            container
            direction='row'
            alignItems='center'
            justifyContent='flex-start'
            xs={12}
          >
            {currentUser ?
              <Grid
                item
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item container direction="row" alignItems="center" xs={10}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    aria-controls={menuOpen ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={menuOpen ? 'true' : undefined}
                    onClick={(e) => setAnchorMenu(e.currentTarget)}
                    sx={{mr: 1}}
                  >
                    <MenuIcon/>
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorMenu}
                    open={menuOpen}
                    onClose={() => setAnchorMenu(null)}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <Link to="/orders" style={{textDecoration: 'none', color: '#000'}} onClick={() => setAnchorMenu(null)}>
                      <MenuItem>
                        <FormattedMessage id="orders"/>
                      </MenuItem>
                    </Link>
                    <Link to="/my_account" style={{textDecoration: 'none', color: '#000'}} onClick={() => setAnchorMenu(null)}>
                      <MenuItem>
                        <FormattedMessage id="my_account"/>
                      </MenuItem>
                    </Link>
                  </Menu>
                  <Grid item sx={{mt: 0.5}}>
                    <Button variant="text" sx={{fontSize: 16}}>
                      <NoUnderlineLink to="/" style={{color: '#fff'}}>
                        <FormattedMessage id="project_name"/>
                      </NoUnderlineLink>
                    </Button>
                  </Grid>
                </Grid>
                <Grid item>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    aria-controls={profileOpen ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={profileOpen ? 'true' : undefined}
                    onClick={(e) => setAnchorProfile(e.currentTarget)}
                    sx={{mr: 1}}
                  >
                    <ProfileIcon/>
                  </IconButton>
                  <Menu
                    id="basic-profile-menu"
                    anchorEl={anchorProfile}
                    open={profileOpen}
                    onClose={() => setAnchorProfile(null)}
                  >
                    <MenuItem onClick={handleSignoutClick}>
                      <FormattedMessage id="signout"/>
                    </MenuItem>
                  </Menu>
                </Grid>
              </Grid>
              :
              <Grid
                container
                justifyContent="space-between"
              >
                <Button variant="text">
                  <NoUnderlineLink to="/" style={{color: '#fff'}}>
                    <FormattedMessage id="project_name"/>
                  </NoUnderlineLink>
                </Button>
                <Link to="/login">
                  <Button variant='contained' color='secondary'>
                    <FormattedMessage id="login"/>
                  </Button>
                </Link>
              </Grid>
            }
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
