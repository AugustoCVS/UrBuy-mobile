import React, { ReactNode, createContext, useState } from "react";
import { ProductProps } from "../ProductContext/product.context";

export type CartProps = {
  products: ProductProps[];
  totalCart: number;
};

export type CartProviderProps = {
  states: CartProps;
  actions: {
    addProductOnCart: React.Dispatch<React.SetStateAction<ProductProps>>;
    increaseProductAmount: (product: ProductProps) => void;
    decreaseProductAmount: (product: ProductProps) => void;
    removeProductOnCart: (product: ProductProps) => void;
    clearCart: () => void;
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
    const productExists = products.find((p) => p.id === product.id);
    if (productExists) {
      increaseProductAmount(product);
      return;
    }
    setProducts([...products, { ...product, amount: 1 }]);
  };

  const removeProductOnCart = (product: ProductProps) => {
    const newProducts = products.filter((p) => p.id !== product.id);
    setProducts(newProducts);
  };

  const increaseProductAmount = (product: ProductProps) => {
    const productSelected = products.find((p) => p.id === product.id);
    if (productSelected) {
      productSelected.amount++;
      setProducts([...products]);
    }
  };

  const decreaseProductAmount = (product: ProductProps) => {
    const productSelected = products.find((p) => p.id === product.id);
    if (productSelected) {
      if (productSelected.amount === 1) {
        removeProductOnCart(product);
        return;
      }
      productSelected.amount--;
      setProducts([...products]);
    }
  };

  const clearCart = () => {
    setProducts([]);
  };

  const totalCart = products.reduce((acc, product) => {
    return acc + product.price * product.amount;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        states: { products, totalCart },
        actions: {
          addProductOnCart,
          increaseProductAmount,
          decreaseProductAmount,
          removeProductOnCart,
          clearCart,
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
