import { ProductsTypesList } from "src/components/ProductsTypesList";

import * as U from "./utils";
import { FlatList } from "react-native";
import { useContext } from "react";
import { ProductContext } from "src/context/ProductContext/product.context";

export const FilterBar: React.FC = () => {
  const { states, actions } = useContext(ProductContext);

  const handleChangeProductTypeColor = ({ category }: { category: string }) => {
    if (states.category === category) {
      return "bg-green-100";
    }

    return "bg-blue-100";
  };

  return (
    <FlatList
      data={U.TypesList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <ProductsTypesList
          key={index}
          category={item.category}
          styling={`${handleChangeProductTypeColor({
            category: item.category,
          })} w-24 h-12 rounded-full justify-center items-center shadow-sm shadow-gray-700 mt-4`}
          iconSize={36}
          iconColor="white"
          onPress={() => actions.setCategory(item.category)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 28, padding: 8, height: 90}}
    />
  );
};
