import { useMediaQuery, useTheme} from "@mui/material";
import MobileAppBar from "./MobileAppBar";
import LargeAppBar from "./LargeAppBar";

const ApplicationBar = (props) => {
    const theme = useTheme();
    const isMobileViewport = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
        { isMobileViewport ? <MobileAppBar /> : <LargeAppBar /> }
        </>
    );
};

export default ApplicationBar;