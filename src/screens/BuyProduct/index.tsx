import { ScrollView, View, Image } from "react-native";
import { ProductInfoList } from "./components/ProductInfoList";
import { ButtonProduct } from "./components/Button";
import { useBuyProduct } from "./hook";

export const BuyProduct: React.FC = () => {
  const { states, actions } = useBuyProduct();

  return (
    <View className="w-full flex-1 items-center bg-white p-4 justify-between">
      <ScrollView showsVerticalScrollIndicator={false} className="w-full">
        <Image
          source={{ uri: states.product.img }}
          height={180}
          className="w-full"
        />

        <View className="w-full py-4 rounded-lg shadow-md mt-4 border border-gray-400">
          <ProductInfoList
            productName={states.product.name}
            productInfo={states.productInfo}
            decreaseAmount={actions.decreaseAmount}
            increaseAmount={actions.increaseAmount}
          />
        </View>
      </ScrollView>

      <ButtonProduct onPress={() => {}} />
    </View>
  );
};
