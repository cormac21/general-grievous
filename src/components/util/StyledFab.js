import {Fab, styled, useTheme} from "@mui/material";

const StyledFab = (props) => {

  const theme = useTheme();

  const CustomFab = styled(Fab)`
    right: ${theme.spacing(2)};
    bottom: ${theme.spacing(2)};
    position: fixed;
  `;

  return (
    <CustomFab {...props} />
  )
}

export default StyledFab;



