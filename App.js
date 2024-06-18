import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./system_redux/store";
import SingleProductsPage from "./screens/SingleProductsPage";
import AllReviews from "./screens/reviews/AllReviews";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import Products from "./screens/products/Products";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Entypo name="home" size={24}  />;
          },
        }}
      />
      <Tab.Screen name="Shop" component={Products} />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SingleProductsPage"
            component={SingleProductsPage}
          />
          <Stack.Screen name="All Reviews" component={AllReviews} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
