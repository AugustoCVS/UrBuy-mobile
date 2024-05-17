import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

export type ProductProps = {
  id: number;
  name: string;
  category: string;
  price: number;
  amount: number;
  img: string;
  brand: string;
  description: string;
};

export type ProductProviderProps = {
  states: {
    product: ProductProps | undefined;
    category: string;
  };
  actions: {
    setProduct: React.Dispatch<React.SetStateAction<ProductProps | undefined>>;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
  };
};

export const ProductContext = createContext<ProductProviderProps>(
  {} as ProductProviderProps
);

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [product, setProduct] = useState<ProductProps | undefined>();
  const [category, setCategory] = useState<string>("");

  return (
    <ProductContext.Provider
      value={{
        states: { product, category },
        actions: { setProduct, setCategory },
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
