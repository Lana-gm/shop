/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

interface IProducts {
  name: string;
  description: string;
  image_url: string;
  price: number;
  id: number;
}

interface IProductsProviderProps {
  children: React.ReactNode;
}

interface IProductsProviderData {
  products: IProducts[];
}

const ProductsContext = createContext<IProductsProviderData>(
  {} as IProductsProviderData
);

export const ProductsProvider = ({ children }: IProductsProviderProps) => {
  const [products, setProducts] = useState<IProducts[]>([] as IProducts[]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://kenzieshop2.herokuapp.com/products", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => setProducts(res.data));
    }
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
