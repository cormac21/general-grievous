import {useEffect, useState} from "react";
import {
  useMediaQuery,
  useTheme
} from "@mui/material";
import MobileOrders from "./MobileOrders";
import DesktopOrders from "./DesktopOrders";
import {getOrders} from "../../api/orderService";
import {useAuth} from "../../context/AuthContext";

export default function Orders() {
  const theme = useTheme();
  const isMobileViewport = useMediaQuery(theme.breakpoints.down('md'));
  const [shouldShowMoreInfo, setShouldShowMoreInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const { currentUser } = useAuth();

  const fetchOrders = async () => {
    const result = await getOrders({userUUID: currentUser.id});
    setOrders(result);
  }

  useEffect(()=> {
    fetchOrders().then(
      setIsLoading(false)
    );
  }, [])

  const showMoreInfo = () => {
    if (shouldShowMoreInfo) {
      setShouldShowMoreInfo(false)
    } else {
      setShouldShowMoreInfo(true);
    }
  }

  return (
    <>
      {isMobileViewport ?
        <MobileOrders
          showMoreInfo={showMoreInfo}
          shouldShowMoreInfo={shouldShowMoreInfo}
          isLoading={isLoading}
          orders={orders}
        />
        :
        <DesktopOrders
          showMoreInfo={showMoreInfo}
          shouldShowMoreInfo={shouldShowMoreInfo}
          isLoading={isLoading}
          orders={orders}
        />
      }
    </>
  );

}
