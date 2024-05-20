import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import StackComponent from "./src/routes/stack.routes";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { AuthProvider } from "src/context/AuthContext/auth.context";
import { ProductProvider } from "src/context/ProductContext/product.context";
import { UserProvider } from "src/providers/user-provider";
import { Host } from "react-native-portalize";
import { CartProvider } from "src/context/CartContext/cart.context";

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <NativeBaseProvider>
              <UserProvider>
                <Host>
                  <StatusBar style="dark" />
                  <StackComponent />
                </Host>
              </UserProvider>
            </NativeBaseProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

export default App;
