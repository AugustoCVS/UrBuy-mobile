import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

import { Dashboard } from "src/screens/Dashboard";

import { HistoricScreen } from "src/screens/Historic";
import { Menu } from "src/screens/Menu";
import { ProductsAvailable } from "src/screens/Products";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export type TabNavigation = {
  Dashboard: undefined;
  Products: undefined;
  Historic: undefined;
  Menu: undefined;
};

export type TabTypes = NativeStackNavigationProp<TabNavigation>;

export default function TabRoutes() {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#749E50",
        tabBarInactiveTintColor: "#173042FC",
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
          backgroundColor: "#F9F8F8",
          paddingBottom: bottom,
          paddingTop: 8,
        },
      }}
      initialRouteName="Dashboard"
    >
      <Tab.Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={20} color={color} />
          ),
          tabBarLabel: "Inicio",
        }}
        component={Dashboard}
      />

      <Tab.Screen
        name="Products"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-bag" size={20} color={color} />
          ),
          tabBarLabel: "Produtos",
        }}
        component={ProductsAvailable}
      />

      <Tab.Screen
        name="Historic"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="book" size={20} color={color} />
          ),
          tabBarLabel: "Histórico",
        }}
        component={HistoricScreen}
      />

      <Tab.Screen
        name="Menu"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="menu-outline" size={20} color={color} />
          ),
          tabBarLabel: "Menu",
        }}
        component={Menu}
      />
    </Tab.Navigator>
  );
}
