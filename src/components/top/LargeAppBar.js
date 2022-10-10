import {AppBar, Box, Button, Container, Toolbar, Typography, useTheme} from "@mui/material";
import {FormattedMessage} from "react-intl";
import NoUnderlineLink from "../util/NoUnderlineLink";

const LargeAppBar = () => {

  return (
      <Container sx={{
          maxWidth: 1132
      }} >
        <AppBar position="static" color="primary">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <NoUnderlineLink to="/" >
                <Typography variant="h6" noWrap className="brand" color="common.white" >
                  <FormattedMessage id="project_name"/>
                </Typography>
              </NoUnderlineLink>
              <Box sx={{ flexGrow: 1, display: { xs : 'none', md: 'flex'}, ml: 3 }}>
                <NoUnderlineLink to="/orders" >
                  <Button sx={{ color: 'white'}} >
                    <FormattedMessage id="orders" />
                  </Button>
                </NoUnderlineLink>
                <NoUnderlineLink to="/my_account" >
                  <Button sx={{ color: 'white'}}>
                    <FormattedMessage id="my_account" />
                  </Button>
                </NoUnderlineLink>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
    );
}

export default LargeAppBar;