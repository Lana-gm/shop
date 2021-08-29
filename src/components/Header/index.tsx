import { Toolbar, MenuItem } from "@material-ui/core";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";
import * as S from "./Header.styles";

const Header = () => (
  <S.Header>
    <Toolbar>
      <MenuItem>Home</MenuItem>
      <MenuItem>Register</MenuItem>
      <MenuItem>
        <FiShoppingCart />
        Cart
      </MenuItem>
      <MenuItem>
        <FiLogIn />
        Login
      </MenuItem>
    </Toolbar>
  </S.Header>
);

export default Header;
