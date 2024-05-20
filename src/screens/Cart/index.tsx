import { FlatList } from "native-base";
import { View, Text } from "react-native";
import { useCart } from "./hook";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { ListEmpty } from "src/components/ListEmtpy";

export const Cart: React.FC = () => {
  const { states, actions } = useCart();

  return (
    <View className="w-full h-full">
      <Header
        total={states.totalCart}
        onPress={actions.handleBuyAllTheProducts}
        loading={states.loading}
        isEmpty={states.isEmpty}
      />

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
        ListEmptyComponent={<ListEmpty isCart />}
      />
    </View>
  );
};
