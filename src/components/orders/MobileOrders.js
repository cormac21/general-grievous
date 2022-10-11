import {Box, Card, Grid, IconButton, Typography} from "@mui/material";
import {FormattedMessage} from "react-intl";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import {useState} from "react";
import NewOrderDialog from "./NewOrderDialog";
import StyledFab from "../util/StyledFab";

const MobileOrders = (props) => {

    const [openNewOrderDialog, setOpenNewOrderDialog] = useState(false);

    const handleFabClick = () => {
      setOpenNewOrderDialog(true);
    }

    const handleCloseDialog = () => {
      setOpenNewOrderDialog(false);
    }

    return (
      <Box className="container" mt={6}>
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
          <StyledFab color="primary" aria-label="add" onClick={handleFabClick}>
            <AddIcon />
          </StyledFab>
          <NewOrderDialog open={openNewOrderDialog} onClose={handleCloseDialog} />
        </Grid>
      </Box>
    )
}

export default MobileOrders;