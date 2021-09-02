import { useCart } from "../../providers/Cart";
import * as S from "./CartProducts.styles";

const CartProducts = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <S.ProductsContainer>
      {cart.map((product, index) => (
        <li key={index}>
          <h1>{product.name}</h1>
          <img src={product.image_url} alt={product.name} />
          <p>{product.description}</p>
          <p>R${product.price}</p>
          <S.Button onClick={() => removeFromCart(product)}>Remove</S.Button>
        </li>
      ))}
    </S.ProductsContainer>
  );
};

export default CartProducts;
