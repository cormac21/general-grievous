import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, FormControl,
    Grid, TextField, Typography,
} from "@mui/material";
import {FormattedMessage} from "react-intl";
import {Form, useForm} from "../../form/useForm";
import {useState} from "react";

const initialFormValues = {
    ticker: '',
    quantity: 0,
    type: 'c',
}

const NewOrderDialog = (props) => {

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFormValues);

    console.log(values);

    const [isBuyOrder, setIsBuyOrder] = useState(true);
    const [buyButtonVariant, setBuyButtonVariant] = useState("contained");
    const [sellButtonVariant, setSellButtonVariant] = useState("outlined");

    function handleBuyClick() {
        setBuyButtonVariant("contained");
        setSellButtonVariant("outlined")
        setIsBuyOrder(true);
        setValues({...values, type: 'c'});
    }

    function handleSellClick() {
        setBuyButtonVariant("outlined");
        setSellButtonVariant("contained")
        setIsBuyOrder(false);
        setValues({...values, type: 'v'});
    }

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
            <Grid container xs={12} mt={1}>
              <Grid item xs={8} mr={2} >
                <TextField
                  variant="outlined"
                  label="Ticker"
                  name="ticker"
                  value={values.ticker}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
                <Grid item xs={3}>
                  <TextField
                    variant="outlined"
                    label="Quantity"
                    name="quantity"
                    value={values.quantity}
                    onChange={handleInputChange}
                  />
                </Grid>
            </Grid>
            <Grid container xs={12} mt={2}>
              <Grid item xs={4}>
                  <TextField
                      variant="outlined"
                      label="Unit Price"
                      name="unitPrice"
                      value={values.unitPrice}
                      onChange={handleInputChange}
                  />
              </Grid>
            </Grid>
              <Grid container xs={12} mt={1}>
                <Grid item xs={4}>
                  <Typography >
                    Valor total: { ((values.unitPrice * values.quantity) * 100 + Number.EPSILON ) /100 }
                  </Typography>
                </Grid>
              </Grid>
              <Grid container xs={12} spacing={1}>
                <Grid item xs={6} >
                  <Button variant={buyButtonVariant}
                          color="success"
                          onClick={handleBuyClick}
                          fullWidth
                  >
                    <FormattedMessage id="buy_button" />
                  </Button>
                </Grid>
                <Grid item xs={6} >
                  <Button variant={sellButtonVariant}
                          color="error"
                          onClick={handleSellClick}
                          fullWidth
                  >
                    <FormattedMessage id="sell_button" />
                  </Button>
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