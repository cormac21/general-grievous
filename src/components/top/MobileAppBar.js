import {useState} from "react";
import {Link} from "react-router-dom";
import {
    AppBar,
    Box,
    Container,
    IconButton,
    Menu, MenuItem,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import {FormattedMessage} from "react-intl";


const MobileAppBar = (props) => {
    console.log(props.menuItems);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

    return (
      <AppBar position="static" color="primary">
        <Container maxWidth="xl" >
          <Toolbar disableGutters>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleOpenMenu}
                sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseMenu}
              MenuListProps={{
                  'aria-labelledby' : 'basic-button',
              }}
            >
              <Link to="/orders" style={{ textDecoration: 'none', color: '#000' }} onClick={handleCloseMenu}>
                <MenuItem >
                  <FormattedMessage id="orders" />
                </MenuItem>
              </Link>
              <Link to="/my_account" style={{ textDecoration: 'none', color: '#000'  }} onClick={handleCloseMenu}>
                <MenuItem >
                  <FormattedMessage id="my_account" />
                </MenuItem>
              </Link>
            </Menu>

            <Typography variant="h6" noWrap component="div" className="brand" >
              <Link to="/">
                <FormattedMessage id="project_name" />
              </Link>
            </Typography>
            <Box flex='1'>

            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
}

export default MobileAppBar;