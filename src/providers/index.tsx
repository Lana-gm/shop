import { ReactNode } from "react";
import { ProductsProvider } from "./Products";
import { CartProvider } from "./Cart";
import { AuthProvider } from "./Auth";

interface IProductsProps {
  children: ReactNode;
}

const Providers = ({ children }: IProductsProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
};

export default Providers;
