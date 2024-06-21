import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { getCategory } from "../../system_redux/Slices/categoryListSlices";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import tw from "twrnc";
import { Card } from "react-native-paper";
import LoadingPage from "../loading_error/LoadingPage";
const CategoryPage = ({
  route: {
    params: { CategoryName },
  },
}) => {
  const { nameCategory, loading } = useSelector((state) => state.namesCategory);
  const navigation = useNavigation();
  console.log(nameCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory(CategoryName));
    navigation.setOptions({
      title: CategoryName,
    });
  }, []);
  return (
    <ScrollView>
      <View style={tw`bg-white`}>
        <View
          style={tw`flex-row bg-gray-100 mx-3 rounded-full px-1 py-2 my-4 justify-between`}
        >
          <View style={tw`flex-row`}>
            <Ionicons
              style={tw` pr-3 m`}
              name="filter"
              size={22}
              color="black"
            />
            <Text>Filter</Text>
          </View>
          <View style={tw`flex-row pr-3`}>
            <FontAwesome5
              style={tw` pr-3`}
              name="exchange-alt"
              size={20}
              color="black"
            />
            <Text>Price: lowest to high</Text>
          </View>
        </View>
        {loading ? (
          <LoadingPage />
        ) : (
          <View style={tw`flex-row flex-wrap`}>
            {nameCategory.map((data, index) => (
              <View key={index} style={tw``}>
                <Card style={tw`w-40  h-90 ml-5 mb-5 mt-4 `}>
                  <View style={tw` `}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("Product 1", {
                          itemsId: data.id,
                        })
                      }
                    >
                      <Card.Cover
                        style={tw`p-3`}
                        source={{ uri: data.images[0] }}
                      />
                    </TouchableOpacity>
                    <View style={tw``}>
                      <View
                        style={tw`bg-white absolute right-0 bottom-[-5]  w-10 h-10 flex justify-center items-center rounded-full`}
                      >
                        <AntDesign name="hearto" size={20} />
                      </View>
                    </View>
                  </View>
                  <View style={tw`mx-2 my-3`}>
                    <View style={tw`flex-row`}>
                      <AntDesign
                        name="star"
                        style={tw`mt-1`}
                        size={18}
                        ssw
                        color="gold"
                      />
                      <AntDesign
                        name="star"
                        style={tw`mt-1`}
                        size={18}
                        ssw
                        color="gold"
                      />
                      <AntDesign
                        name="star"
                        style={tw`mt-1`}
                        size={18}
                        ssw
                        color="gold"
                      />
                      <AntDesign
                        name="star"
                        style={tw`mt-1`}
                        size={18}
                        ssw
                        color="gold"
                      />

                      <Text style={tw`mt-1`}>({data.rating})</Text>
                    </View>
                    <Text style={tw`text-gray-400 font-bold text-xs`}>
                      {data.title}
                    </Text>
                    <Text style={tw`font-bold text-lg`}>{data.category}</Text>
                    <View style={tw`flex-row`}>
                      <Text style={tw`line-through text-gray-400 font-bold`}>
                        {data.price}$
                      </Text>
                      <Text style={tw` text-red-600 font-bold`}>
                        {data.discountPercentage}$
                      </Text>
                    </View>
                  </View>
                </Card>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default CategoryPage;
