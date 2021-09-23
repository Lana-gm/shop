import { Toolbar, MenuItem } from "@material-ui/core";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import * as S from "./Header.styles";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";

const Header = () => {
  const history = useHistory();

  const auth = useAuth();

  return (
    <S.Header>
      <Toolbar>
        <MenuItem onClick={() => history.push("/")}>Cadastro</MenuItem>
        <MenuItem onClick={() => history.push("/login")}>
          <FiLogIn />
          Login
        </MenuItem>
        <MenuItem onClick={() => history.push("/home")}>
          <FaHome />
          Home
        </MenuItem>
        <MenuItem onClick={() => history.push("/cart")}>
          <FiShoppingCart />
          Carrinho
        </MenuItem>
      </Toolbar>
    </S.Header>
  );
};

export default Header;
