import React, { FC, ReactNode, createContext, useContext, useState } from "react";

export type ProductContextProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  img: string;
}

export type ProductProviderProps = {
  states: {
    product: ProductContextProps | undefined;
  };
  actions: {
    setProduct: React.Dispatch<React.SetStateAction<ProductContextProps | undefined>>;
  }
}

export const ProductContext = createContext<ProductProviderProps>({} as ProductProviderProps);

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider: FC<{children?: ReactNode}> = ({children}) => {
  const [product, setProduct] = useState<ProductContextProps | undefined>();

  return (
    <ProductContext.Provider value={{
      states: { product },
      actions: { setProduct } 
    }}>
      {children}
    </ProductContext.Provider>
  )
}