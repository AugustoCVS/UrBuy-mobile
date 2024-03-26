import React, { FC, ReactNode, createContext, useContext, useState } from "react";

export type ProductProps = {
  id: string;
  name: string;
  productType: string;
  price: number;
  quantity: number;
  img: string[];
  additionalInfo?: {
    brand?: string;
    category?: string;
    description?: string;
  }
}

export type ProductProviderProps = {
  states: {
    product: ProductProps | undefined;
    productType: string;
  };
  actions: {
    setProduct: React.Dispatch<React.SetStateAction<ProductProps | undefined>>;
    setProductType: React.Dispatch<React.SetStateAction<string>>;
  }
}

export const ProductContext = createContext<ProductProviderProps>({} as ProductProviderProps);

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider: FC<{children?: ReactNode}> = ({children}) => {
  const [product, setProduct] = useState<ProductProps | undefined>();
  const [productType, setProductType] = useState<string>("");

  return (
    <ProductContext.Provider value={{
      states: { product, productType },
      actions: { setProduct, setProductType } 
    }}>
      {children}
    </ProductContext.Provider>
  )
}