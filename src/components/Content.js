import { FormattedMessage } from "react-intl";
import {Box, Typography} from "@mui/material";

const Content = () => {
    return (
      <Box className="container hero">
        <Typography variant="h1"><FormattedMessage id="learn_to" /></Typography>
      </Box>
    );
};

export default Content;