import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, FormControl,
    Grid, TextField,
} from "@mui/material";
import {FormattedMessage} from "react-intl";
import {Form, useForm} from "../form/useForm";

const initialFormValues = {
    ticker: '',
    quantity: 0,
}

const NewOrderDialog = (props) => {

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFormValues);

    function handleSubmit() {

    }

    return (
      <Dialog open={props.open} onClose={props.onClose}>
        <Form>
          <FormControl>
          <DialogTitle >
            <FormattedMessage id="add_new_order" />
          </DialogTitle>
          <DialogContent>
            <Grid container>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="Ticker"
                  name="ticker"
                  value={values.ticker}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button type="submit" >
              <FormattedMessage id="submit" />
            </Button>
          </DialogActions>
          </FormControl>
        </Form>
      </Dialog>
    )
}

export default NewOrderDialog;