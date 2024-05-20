import { FlatList } from "native-base";
import { View } from "react-native";
import { useCart } from "./hook";
import { Card } from "./components/Card";

export const Cart: React.FC = () => {
  const { states, actions } = useCart();

  return (
    <View className="w-full h-full">
      <FlatList
        data={states.products}
        keyExtractor={(product) => product.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 16,
        }}
        renderItem={({ item }) => (
          <Card
            key={item.id}
            amount={item.amount}
            category={item.category}
            name={item.name}
            price={item.price}
            brand={item.brand}
            handleDecreaseAmount={() => actions.decreaseProductAmount(item)}
            handleIncreaseAmount={() => actions.increaseProductAmount(item)}
            img={item.img}
          />
        )}
      />
    </View>
  );
};
