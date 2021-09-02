import { ReactNode } from "react";
import { ProductsProvider } from "./Products";
import { CartProvider } from "./Cart";

interface IProductsProps {
  children: ReactNode;
}

const Providers = ({ children }: IProductsProps) => {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  );
};

export default Providers;
