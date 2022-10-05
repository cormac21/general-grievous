import {FormattedMessage} from "react-intl";
import {Container, Typography} from "@mui/material";
import LanguageSelect from "./LanguageSelect";

const Footer = (props) => {

    return (
      <Container className="mt footer">
        <Typography variant="h6" textAlign="center" >
          <FormattedMessage id="footer_credits" />
        </Typography>
        <LanguageSelect currentLocale={props.currentLocale} handleChange={props.handleChange} />
      </Container>
    );
};

export default Footer;