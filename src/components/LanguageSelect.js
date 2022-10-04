import {useState} from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {LOCALES} from "../i18n/locales";


const LanguageSelect = (props) => {
    const [currentLocale, setCurrentLocale] = useState(props.currentLocale);

    const languages = [
        { name: "English", code: LOCALES.ENGLISH},
        { name: "Português", code: LOCALES.PORTUGUESE},
        { name: "Español", code: LOCALES.SPANISH},
    ]

    return (
      <>
        <FormControl>
          <InputLabel id="languages-label">Languages</InputLabel>
          <Select onChange={props.handleChange} label="Languages" labelId="languages-label">
            <MenuItem value={languages[0].code}>{languages[0].name}</MenuItem>
            <MenuItem value={languages[1].code}>{languages[1].name}</MenuItem>
            <MenuItem value={languages[2].code}>{languages[2].name}</MenuItem>
          </Select>
        </FormControl>
      </>
    );

}

export default LanguageSelect;