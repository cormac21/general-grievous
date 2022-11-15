import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Skeleton,
  Typography
} from "@mui/material";
import {FormattedMessage} from "react-intl";
import InfoIcon from "@mui/icons-material/Info";
import NewOrderDialog from "./NewOrderDialog";
import {useState} from "react";
import OrderList from "./OrderList";

const DesktopOrders = (props) => {
  const [openNewOrderDialog, setOpenNewOrderDialog] = useState(false);
  console.log("orders", props.orders);

  const handleCloseDialog = () => {
    setOpenNewOrderDialog(false);
  }

  function handleOpenDialog() {
    setOpenNewOrderDialog(true);
  }

  return (
    <Box className="container" my={2} padding={4}>
      <Grid container spacing={2}>
        <Grid container item>
          <Typography variant="h3">
            <FormattedMessage id="orders"/>
          </Typography>
          <IconButton onClick={props.showMoreInfo}>
            <InfoIcon/>
          </IconButton>
        </Grid>
        {props.shouldShowMoreInfo &&
          <Grid item xs={12}>
            <Card
              variant="outlined"
              sx={{ padding: 2}}
            >
              <Typography variant="p">
                <FormattedMessage id="orders_more_info"/>
              </Typography>
            </Card>
          </Grid>
        }
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleOpenDialog}>
            <FormattedMessage id="add_new_order"/>
          </Button>
        </Grid>
        { props.isLoading ?
          <Skeleton height={240} width={1104}/>
          :
          <Grid item container xs={10} >
            <OrderList orders={props.orders}/>
          </Grid>
        }
        <NewOrderDialog open={openNewOrderDialog} onClose={handleCloseDialog}/>
      </Grid>
    </Box>
  );
}

export default DesktopOrders;