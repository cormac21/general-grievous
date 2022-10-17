import { FormattedMessage } from "react-intl";
import {Box, Container, Grid, Typography} from "@mui/material";

const Content = () => {
    return (
      <Container className="container hero">
        <Typography variant="h1">
            <FormattedMessage id="landing_page_greeting" />
        </Typography>
        <Grid container xs={12} >
          <Box component="img" sx={{
            maxHeight: 450,
            maxWidth: 450,
          }}
          alt="Timão e Pumba"
          src="/timonandPumbaa.jpg"/>
        </Grid>
      </Container>
    );
};

export default Content;