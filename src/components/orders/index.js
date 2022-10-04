import {FormattedMessage} from "react-intl";
import {Box, Button, Container, Typography} from "@mui/material";

export default function Orders() {

    return (
      <div>
        <Container className="container title" >
          <Typography variant="h3">
            <FormattedMessage id="orders" />
          </Typography>
          <Button variant="contained">
            <FormattedMessage id="new_order_button" />
          </Button>

        </Container>
      </div>
    );

}