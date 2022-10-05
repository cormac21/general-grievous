import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";


const MobileAppBar = () => {

    return (
      <AppBar position="static" color="primary">
        <Container maxWidth="xl" >
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="div" className="brand" >
              <Link to="/">
                Mobile App Bar
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