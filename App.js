import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { Link, NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./system_redux/store";
import SingleProductsPage from "./screens/SingleProductsPage";
import AllReviews from "./screens/reviews/AllReviews";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Bag from "./screens/Card/Bag";
import Favorite from "./screens/Favorite/Favorite";
import tw from "twrnc";
import CategoryPage from "./screens/category/CategoryPage";
import Profile from "./screens/Profile/Profile";
import ProductShop from "./screens/Shop/ProductShop";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          paddingBottom: 25,
          paddingTop: 10,
          height: 85,
        },
      }}
    >
      {/* Home Screen */}
      <Tab.Screen
        name="Homes"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
          tabBarActiveTintColor: "red",
        }}
      />

      {/* Shop Screen */}
      <Tab.Screen
        name="Categories"
        component={ProductShop}
        options={{
          headerLeft: () => (
            <Link to={{ screen: "Homes" }} style={tw`pl-2`}>
              <AntDesign name="arrowleft" size={22} color="black" />
            </Link>
          ),
          tabBarLabel: "Shop",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={30} />
          ),
          tabBarActiveTintColor: "red",
        }}
      />

      {/* Bag Screen */}
      <Tab.Screen
        name="Bag"
        component={Bag}
        options={{
          headerLeft: () => (
            <Link to={{ screen: "Homes" }} style={tw`pl-2`}>
              <AntDesign name="arrowleft" size={22} color="black" />
            </Link>
          ),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={30} />
          ),
          tabBarActiveTintColor: "red",
        }}
      />

      {/* Favorite Screen */}
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerLeft: () => (
            <Link to={{ screen: "Homes" }} style={tw`pl-2`}>
              <AntDesign name="arrowleft" size={22} color="black" />
            </Link>
          ),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={30} />
          ),
          tabBarActiveTintColor: "red",
        }}
      />

      {/* Profile Screen */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft: () => (
            <Link to={{ screen: "Homes" }} style={tw`pl-2`}>
              <AntDesign name="arrowleft" size={22} color="black" />
            </Link>
          ),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
          tabBarActiveTintColor: "red",
        }}
      />
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
          <Stack.Screen name="Product 1" component={SingleProductsPage} />
          <Stack.Screen name="All Reviews" component={AllReviews} />
          <Stack.Screen name="CategoryPage" component={CategoryPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
