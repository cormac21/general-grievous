import {useState} from "react";
import {
    useMediaQuery,
    useTheme
} from "@mui/material";
import MobileOrders from "./MobileOrders";
import DesktopOrders from "./DesktopOrders";

export default function Orders() {
    const theme = useTheme();
    const isMobileViewport = useMediaQuery(theme.breakpoints.down('md'));
    const [shouldShowMoreInfo, setShouldShowMoreInfo] = useState(false);

    const showMoreInfo = () => {
        if(shouldShowMoreInfo) {
            setShouldShowMoreInfo(false)
        } else {
            setShouldShowMoreInfo(true);
        }
    }

    return (
        <>
          { isMobileViewport ?
              <MobileOrders showMoreInfo={showMoreInfo} shouldShowMoreInfo={shouldShowMoreInfo}/>
            : <DesktopOrders showMoreInfo={showMoreInfo} shouldShowMoreInfo={shouldShowMoreInfo} />
          }
        </>
    );

}
