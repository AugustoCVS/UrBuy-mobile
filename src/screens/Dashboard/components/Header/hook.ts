import { useNavigation } from "@react-navigation/native"
import { StackTypes } from "src/routes/stack.routes"

export const useHeader = () => {
  const navigation = useNavigation<StackTypes>()

  const handleNavigateToCart = () => {
    navigation.navigate("Cart")
  }

  return {
    actions: {
      handleNavigateToCart
    }
  }
}