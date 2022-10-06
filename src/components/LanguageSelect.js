import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import {LOCALES} from "../i18n/locales";
import {FormattedMessage} from "react-intl";

const LanguageSelect = (props) => {
    const languages = [
        {name: "English", code: LOCALES.ENGLISH},
        {name: "Português", code: LOCALES.PORTUGUESE},
        {name: "Español", code: LOCALES.SPANISH},
    ]

    return (
      <>
        <Grid container justifyContent="center" mt={2}>
          <Grid item md={2} sm={12} xs={6}>
            <FormControl fullWidth>
              <InputLabel id="languages-label">
                <FormattedMessage id="languages" />
              </InputLabel>
              <Select onChange={props.handleChange} label="Languages" labelId="languages-label">
                <MenuItem value={languages[0].code}>{languages[0].name}</MenuItem>
                <MenuItem value={languages[1].code}>{languages[1].name}</MenuItem>
                <MenuItem value={languages[2].code}>{languages[2].name}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </>
    );
}

export default LanguageSelect;