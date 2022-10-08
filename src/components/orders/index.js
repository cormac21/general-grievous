import {useState} from "react";
import {FormattedMessage} from "react-intl";
import {Box, Button, Container, Dialog, Typography} from "@mui/material";

export default function Orders() {

    const [openNewOrderDialog, setOpenNewOrderDialog] = useState(false);

    const handleOpenNewOrderDialog = () => {
        setOpenNewOrderDialog(true);
    }

    const handleCloseNewOrderDialog = () => {
        setOpenNewOrderDialog(false);
    }

    return (
      <Box className="container title" mt={6}>
        <Typography variant="h3">
          <FormattedMessage id="orders" />
        </Typography>
        <Button variant="contained" onClick={handleOpenNewOrderDialog}>
          <FormattedMessage id="new_order_button" />
        </Button>
          <Dialog open={openNewOrderDialog} onClose={handleCloseNewOrderDialog}>

          </Dialog>
      </Box>
    );

}