import { ProductsTypesList } from "src/components/ProductsTypesList";

import * as U from "./utils";
import { FlatList } from "react-native";

export const FilterBar: React.FC = () => {
  return (
    <FlatList
      data={U.TypesList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <ProductsTypesList
          key={index}
          category={item.category}
          onPress={() => {}}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 28, padding: 8 }}
    />
  );
};
