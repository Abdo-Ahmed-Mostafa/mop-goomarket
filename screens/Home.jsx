import { Image, View, TouchableOpacity, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { Card, Avatar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { getDataAllProducts } from "../system_redux/Slices/ProductsSlices";
import AntDesign from "@expo/vector-icons/AntDesign";

const Home = () => {
  const { products } = useSelector((state) => state.allDataProducts);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // console.log(products);
  useEffect(() => {
    dispatch(getDataAllProducts());
  }, []);
  return (
    <ScrollView>
      <View style={tw`bg-white`}>
        {/* start image */}

        <View style={tw`shadow-2xl shadow-black  `}>
          <View>
            <Image
              source={require("../assets/image.png")}
              style={tw`w-full `}
            />

            <TouchableOpacity
              style={[
                tw`  bg-red-500 py-2 px-4  rounded-full w-23 mt-[-150px] ml-3`,
              ]}
            >
              <Text style={tw`text-white text-lg font-semibold text-center `}>
                Check
              </Text>
            </TouchableOpacity>
            <View style={tw`mt-[-150px] ml-3`}>
              <Text style={tw`text-5xl text-white font-bold`}>Fashion</Text>
              <Text style={tw`text-5xl text-white font-bold`}>Sale</Text>
            </View>
          </View>
        </View>
        {/* end image */}
        <View style={tw`mt-[180px] flex-row justify-between	 ml-5`}>
          <View>
            <Text style={tw`text-4xl font-bold`}>New</Text>
            <Text style={tw`text-gray-400 text-xs`}>
              You’ve never seen it before!
            </Text>
          </View>
          <Text style={tw`mr-2 font-bold mt-3`}>View All</Text>
        </View>
        {/* start cards */}
        <View style={tw`mb-11 w-full flex-row flex-wrap mt-2  `}>
          {/* <ScrollView> */}
          {products.map((data, index) => (
            <View key={index} style={tw``}>
              <Card style={tw`w-40  h-80 ml-5 mb-5 mt-4 `}>
                <View style={tw`relative `}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("SingleProductsPage", {
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
          {/* </ScrollView> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
