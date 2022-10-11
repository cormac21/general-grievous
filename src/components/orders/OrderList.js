import React from "react";
import {Grid, Typography} from "@mui/material";
import TableHeader from "./TableHeader";

const OrderList = (props) => {

    return (
        <Grid container xs={12} sx={{
            margin: 2
        }}>
          <TableHeader />
          {props.orders.map((order) => (
            <Grid item xs={12} container>
              <Grid item xs={2}>
                <Typography variant="caption" >
                  {order.ticker}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="caption" >
                  {order.quantity}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="caption" >
                  {order.type}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="caption" >
                  {order.unitPrice}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="caption" >
                  {order.totalPrice}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
    );
}

export default OrderList;
