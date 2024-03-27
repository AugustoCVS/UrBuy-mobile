import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import StackComponent from "./src/routes/stack.routes";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { AuthProvider } from "src/context/AuthContext/auth.context";
import { ProductProvider } from "src/context/ProductContext/product.context";

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <ProductProvider>
          <NativeBaseProvider>
            <StatusBar style="dark" />
            <StackComponent />
          </NativeBaseProvider>
        </ProductProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

export default App;
