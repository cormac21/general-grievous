import {Box, Button, Card, Grid, IconButton, Typography} from "@mui/material";
import {FormattedMessage} from "react-intl";
import InfoIcon from "@mui/icons-material/Info";
import NewOrderDialog from "./NewOrderDialog";
import {useState} from "react";
import OrderList from "./OrderList";

const previousOrders = [
    {
        ticker : "MGLU3",
        quantity: 100,
        type: "c",
        unitPrice: 4.97,
        totalPrice: 497.00
    },
    {
        ticker: "VALE3",
        quantity: 100,
        type: "c",
        unitPrice: 45.00,
        totalPrice: 4500.00
    }
]

const DesktopOrders = (props) => {

    const [openNewOrderDialog, setOpenNewOrderDialog] = useState(false);

    const handleCloseDialog = () => {
        setOpenNewOrderDialog(false);
    }

    function handleOpenDialog() {
        setOpenNewOrderDialog(true);
    }

    return (
      <Box className="container" mt={4}>
        <Grid container spacing={1} >
          <Grid item xs={12} container>
            <Typography variant="h3">
              <FormattedMessage id="orders" />
            </Typography>
            <IconButton onClick={props.showMoreInfo}>
              <InfoIcon />
            </IconButton>
          </Grid>
          {props.shouldShowMoreInfo &&
            <Grid item xs={12} container>
              <Card variant="outlined">
                <Typography variant="p">
                  <FormattedMessage id="orders_more_info" />
                </Typography>
              </Card>
            </Grid>
          }
          <Grid item xs={2}>
            <Button variant="contained" onClick={handleOpenDialog}>
              <FormattedMessage id="add_new_order" />
            </Button>
          </Grid>
          <OrderList orders={previousOrders}></OrderList>
          <NewOrderDialog open={openNewOrderDialog} onClose={handleCloseDialog} />
        </Grid>
      </Box>
    );
}

export default DesktopOrders;