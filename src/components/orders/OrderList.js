import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import {FormattedMessage} from "react-intl";

const OrderList = (props) => {

  return (
    <TableContainer component={Paper} sx={{my: 2}}>
      <Table sx={{minWidth: 650}}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant='h6'>
                <FormattedMessage id="ticker"/>
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant='h6'>
                <FormattedMessage id="quantity"/>
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant='h6'>
                <FormattedMessage id="order_type"/>
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant='h6'>
                <FormattedMessage id="unit_price"/>
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant='h6'>
                <FormattedMessage id="total_price"/>
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.orders.map((order) => (
            <TableRow
              key={order.id}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell component="th" scope="row">
                {order.ticker}
              </TableCell>
              <TableCell align="right">
                {order.quantity}
              </TableCell>
              <TableCell align="right">
                {order.type}
              </TableCell>
              <TableCell align="right">
                {order.unitPrice}
              </TableCell>
              <TableCell align="right">
                {order.totalPrice}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrderList;
