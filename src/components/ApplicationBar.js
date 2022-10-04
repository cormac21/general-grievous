import {FormattedMessage} from "react-intl";
import {LOCALES} from "../i18n/locales";
import {Link} from "react-router-dom";
import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";

const ApplicationBar = (props) => {
    const menu = [
        {
            key: "orders",
            title: "Orders",
            path: "/orders",
        },
        {
            key: "my_account",
            title: "MyAccount",
            path: "/my_account",
        },
    ];

    const languages = [
        { name: "English", code: LOCALES.ENGLISH},
        { name: "Português", code: LOCALES.PORTUGUESE},
        { name: "Español", code: LOCALES.SPANISH},
    ]

    return (
      <Container sx={{
          maxWidth: 1182
      }}>
        <AppBar position="static" color="primary">
          <Container maxWidth="xl" >
            <Toolbar disableGutters>
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
      </Container>
    );
};

export default ApplicationBar;