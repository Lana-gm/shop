import { useProducts } from "../../providers/Products";
import { useCart } from "../../providers/Cart";
import * as S from "./Products.styles";

const Products = () => {
  const { products } = useProducts();

  const { addToCart } = useCart();

  return (
    <S.ProductsContainer>
      {products.map((product, index) => (
        <li key={index}>
          <h1>{product.name}</h1>
          <img src={product.image_url} alt={product.name} />
          <p>{product.description}</p>
          <p>R${product.price}</p>
          <S.Button onClick={() => addToCart(product)}>Add to cart</S.Button>
        </li>
      ))}
    </S.ProductsContainer>
  );
};

export default Products;
