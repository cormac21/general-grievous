import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";
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
              <Box flex='1'>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
    );
}


export default LargeAppBar;