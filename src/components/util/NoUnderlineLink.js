import {styled} from "@mui/material";
import {Link} from "react-router-dom";

const NoUnderlineLink = styled(Link)`
  text-decoration: none;
  &:visited, &:focus, &:active, &:hover {
    text-decoration: none;
  }  
`;

export default NoUnderlineLink;