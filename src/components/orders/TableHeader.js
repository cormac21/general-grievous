import {Grid, Typography} from "@mui/material";
import {FormattedMessage} from "react-intl";

const TableHeader = () => {

    return (
      <Grid item xs={12} container>
        <Grid item xs={2}>
          <Typography variant="h6" >
            <FormattedMessage id="ticker" />
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" >
            <FormattedMessage id="quantity" />
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" >
              <FormattedMessage id="order_type" />
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" >
            <FormattedMessage id="unit_price" />
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" >
              <FormattedMessage id="total_price" />
          </Typography>
        </Grid>
      </Grid>
    );
}

export default TableHeader;