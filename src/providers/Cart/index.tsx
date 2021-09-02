import { createContext, useContext, useState } from "react";

interface IProducts {
  name: string;
  description: string;
  image_url: string;
  price: number;
  id: number;
}

interface ICartProviderProps {
  children: React.ReactNode;
}

interface ICartProviderData {
  cart: IProducts[];
  addToCart: (product: IProducts) => void;
  removeFromCart: (product: IProducts) => void;
}

const CartContext = createContext<ICartProviderData>({} as ICartProviderData);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [cart, setCart] = useState<IProducts[]>([] as IProducts[]);

  const addToCart = (product: IProducts) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToDelete: IProducts) => {
    const newList = cart.filter(
      (product) => product.name !== productToDelete.name
    );
    setCart(newList);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
