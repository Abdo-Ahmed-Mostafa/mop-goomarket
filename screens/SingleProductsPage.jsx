import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { SingleProduct } from "../system_redux/Slices/ProductsSlices";
import { ActivityIndicator, Button, MD2Colors } from "react-native-paper";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
const SingleProductsPage = () => {
  const {
    params: { itemsId },
  } = useRoute();
  const dispatch = useDispatch();
  const { singleProd, singleProdLoading } = useSelector(
    (state) => state.allDataProducts
  );
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(SingleProduct(itemsId));
  }, []);
  return (
    <View>
      {singleProdLoading ? (
        <View style={tw`flex justify-center items-center w-full h-full`}>
          <ActivityIndicator
            animating={true}
            size={"large"}
            color={MD2Colors.red800}
            // style={tw`my-44`}
          />
        </View>
      ) : (
        <ScrollView>
          <View>
            <View>
              <Image
                style={tw`w-100 h-100 bg-gray-200   `}
                source={{
                  uri: singleProd?.images && singleProd?.images[0],
                }}
              />
            </View>
            <View style={tw` ml-2`}>
              <Text style={tw`mt-3 text-2xl font-bold`}>
                {singleProd?.title}
              </Text>

              <View style={tw`mr-2 flex-row justify-between`}>
                <View>
                  <Text style={tw`mt-2 text-gray-400 font-bold text-xs`}>
                    {singleProd?.category}
                  </Text>
                  <View style={tw`flex-row mt-1`}>
                    <AntDesign
                      name="star"
                      style={tw``}
                      size={16}
                      ssw
                      color="gold"
                    />
                    <AntDesign
                      name="star"
                      style={tw``}
                      size={16}
                      ssw
                      color="gold"
                    />
                    <AntDesign
                      name="star"
                      style={tw``}
                      size={16}
                      ssw
                      color="gold"
                    />
                    <AntDesign
                      name="star"
                      style={tw``}
                      size={16}
                      ssw
                      color="gold"
                    />
                    <AntDesign
                      name="star"
                      style={tw``}
                      size={16}
                      ssw
                      color="gold"
                    />
                    <Text style={tw` text-xs text-gray-400`}>(10)</Text>
                  </View>
                </View>
                <Text style={tw`text-xl font-bold mt-2 mr-2`}>
                  ${singleProd?.price}
                </Text>
              </View>
              <Text style={tw`mt-2 text-lg mr-2`}>
                {singleProd?.description}
              </Text>
              <View>
                <View style={tw`flex-row justify-between mr-3`}>
                  <Text style={tw`text-xl font-bold my-2 ml-2 `}>reviews</Text>
                  <Text
                    style={tw`mt-3 font-bold underline`}
                    onPress={() =>
                      navigation.navigate("All Reviews", singleProd)
                    }
                  >
                    {" "}
                    View All
                  </Text>
                </View>
                <View style={tw`bg-white mx-3 mr-5 p-5`}>
                  <Text style={tw`font-bold text-lg`}>
                    {singleProd.reviews[0].reviewerName}
                  </Text>
                  <View style={tw`flex-row justify-between `}>
                    <View style={tw`flex-row`}>
                      <AntDesign
                        name="star"
                        style={tw`mt-1`}
                        size={14}
                        ssw
                        color="gold"
                      />
                      <AntDesign
                        name="star"
                        style={tw`mt-1`}
                        size={14}
                        ssw
                        color="gold"
                      />
                      <AntDesign
                        name="star"
                        style={tw`mt-1`}
                        size={14}
                        ssw
                        color="gold"
                      />
                      <AntDesign
                        name="star"
                        style={tw`mt-1`}
                        size={14}
                        ssw
                        color="gold"
                      />
                      <AntDesign
                        name="staro"
                        style={tw`mt-1`}
                        size={14}
                        ssw
                        color="gray"
                      />
                    </View>
                    <Text>{singleProd.reviews[0].date.slice(0, 10)}</Text>
                  </View>
                  <Text style={tw`mt-2 text-gray-600`}>
                    {singleProd.reviews[0].reviewerEmail}
                  </Text>
                  <Text style={tw`mt-2 text-gray-700 font-bold`}>
                    {singleProd.reviews[0].comment}
                  </Text>
                  <View style={tw`flex-row justify-end`}>
                    <Text style={tw`mt-1 mr-1 text-gray-500 font-bold`}>
                      Helpful
                    </Text>
                    <AntDesign name="like2" size={20} color="gray" />
                  </View>
                </View>
              </View>
              <Button
                style={tw`bg-red-700 mt-7 mb-5 mx-4`}
                mode="contained"
                onPress={() => console.log("Pressed")}
              >
                ADD TOO CART
              </Button>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default SingleProductsPage;
