import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { Dashboard } from 'src/screens/Dashboard';
import { ProductScreen } from 'src/screens/Dashboard/components/Products/components/ProductCard';

const Stack = createNativeStackNavigator();

export type StackNavigation = {
  Home: undefined;
  Dashboard: undefined;
  Produtos: {
    item: {
      name: string;
      description: string;
      price: number;
      quantity: number;
    }
  }
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          component={Home}
        />

        <Stack.Screen
          name="Dashboard"
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          component={Dashboard}
        />

        <Stack.Screen
          name="Produtos"
          component={ProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}