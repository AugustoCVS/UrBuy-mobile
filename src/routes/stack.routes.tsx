import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { ProductScreen } from "src/screens/SingleProduct";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "auth/FirebaseConfig";
import TabRoutes from "./tab.routes";

const Stack = createNativeStackNavigator();

export type StackNavigation = {
  Home: undefined;
  TabDashboard: undefined;
  SingleProduct: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="TabDashboard"
              options={{
                title: "",
                headerTransparent: true,
                headerShown: false,
              }}
              component={TabRoutes}
            />

            <Stack.Screen
              name="SingleProduct"
              options={{
                title: "Produto",
              }}
              component={ProductScreen}
            />
          </>
        ) : (
          <Stack.Screen
            name="Home"
            options={{
              title: "",
              headerTransparent: true,
              headerShown: false,
            }}
            component={Home}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
