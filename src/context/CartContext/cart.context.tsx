import React, { ReactNode, createContext, useState } from "react";
import { ProductProps } from "../ProductContext/product.context";

export type CartProps = {
  products: ProductProps[];
};

export type CartProviderProps = {
  states: CartProps;
  actions: {
    addProductOnCart: React.Dispatch<React.SetStateAction<ProductProps>>;
  };
};

export const CartContext = createContext<CartProviderProps>(
  {} as CartProviderProps
);

export const useCartContext = () => CartContext;

export const CartProvider: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const addProductOnCart = (product: ProductProps) => {
    setProducts([...products, product]);
  };

  return (
    <CartContext.Provider
      value={{
        states: { products },
        actions: { addProductOnCart },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
