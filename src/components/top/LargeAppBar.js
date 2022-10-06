import {AppBar, Box, Button, Container, Menu, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";

const LargeAppBar = () => {

    return (
      <Container sx={{
          maxWidth: 1132
      }} >
        <AppBar position="static" color="primary">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography variant="h6" noWrap component="div" className="brand">
                <Link to="/">
                  <FormattedMessage id="project_name"/>
                </Link>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs : 'none', md: 'flex'}, ml: 3 }}>
                <Button >
                  <Link to="/orders" style={{ textDecoration: 'none', color: '#000'  }} >
                    <FormattedMessage id="orders" />
                  </Link>
                </Button>
                <Button >
                  <Link to="/my_account" style={{ textDecoration: 'none', color: '#000'  }}>
                    <FormattedMessage id="my_account" />
                  </Link>
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
    );
}


export default LargeAppBar;