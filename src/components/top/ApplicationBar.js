import { useMediaQuery, useTheme} from "@mui/material";
import MobileAppBar from "./MobileAppBar";
import LargeAppBar from "./LargeAppBar";

export default function ApplicationBar() {
    const theme = useTheme();
    const isMobileViewport = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
        { isMobileViewport ? <MobileAppBar /> : <LargeAppBar /> }
        </>
    );
};
