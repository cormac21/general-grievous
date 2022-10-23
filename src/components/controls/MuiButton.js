import Button from '@mui/material/Button';
import {FormattedMessage} from "react-intl";

export default function MuiButton(props) {

  const { size, variant, color, messageId, onClick, ...other } = props;

  return (
    <Button
      size={size || "large"}
      color={color || "primary"}
      variant={variant || "contained"}
      onClick={onClick}
      {...other} >
      <FormattedMessage id={messageId} />
    </Button>
  )

}
