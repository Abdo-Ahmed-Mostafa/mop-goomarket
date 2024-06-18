import { View, Text, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import { useRoute } from "@react-navigation/native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import {
  ProgressBar,
  MD3Colors,
  Button,
  TextInput,
  IconButton,
} from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import { StyleSheet } from "react-native-web";
const AllReviews = () => {
  const { params } = useRoute();
  const refRBSheet = useRef();

  return (
    <ScrollView>
      <View style={tw`ml-3`}>
        <Text style={tw`text-3xl font-bold mt-3`}>Rating & Reviews</Text>
        <View>
          {/* Start rating */}
          <View style={tw`mt-7 flex-row justify-between`}>
            <View>
              <Text style={tw`text-4xl font-bold`}>{params?.rating}</Text>
              <Text style={tw`text-gray-400`}>
                {params?.reviews.length} Ratings
              </Text>
            </View>
            {/* Start Stars */}
            <View style={tw`flex-row`}>
              <View>
                <View style={tw`flex-row `}>
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={13}
                    ssw
                    color="gold"
                  />
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={13}
                    ssw
                    color="gold"
                  />
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={13}
                    ssw
                    color="gold"
                  />
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={13}
                    ssw
                    color="gold"
                  />
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={13}
                    ssw
                    color="gold"
                  />
                </View>
                <View style={tw`flex-row justify-end mt-1`}>
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={13}
                    ssw
                    color="gold"
                  />
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={13}
                    ssw
                    color="gold"
                  />
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={13}
                    ssw
                    color="gold"
                  />
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={13}
                    ssw
                    color="gold"
                  />
                </View>
                <View style={tw`flex-row justify-end  mt-1`}>
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={13}
                    ssw
                    color="gold"
                  />
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={13}
                    ssw
                    color="gold"
                  />
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={13}
                    ssw
                    color="gold"
                  />
                </View>
                <View style={tw`flex-row justify-end mt-1`}>
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={13}
                    ssw
                    color="gold"
                  />
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={13}
                    ssw
                    color="gold"
                  />
                </View>
                <View style={tw`flex-row justify-end mt-1`}>
                  <AntDesign
                    name="star"
                    style={tw``}
                    size={13}
                    ssw
                    color="gold"
                  />
                </View>
              </View>
              <View>
                <View style={tw`flex-row mx-3`}>
                  <ProgressBar
                    progress={1}
                    style={tw`py-1 w-25  my-1 mx-3 rounded bg-red-700`}
                    color={MD3Colors.error50}
                  />
                </View>
                <View style={tw`flex-row mx-3`}>
                  <ProgressBar
                    progress={0.5}
                    style={tw`py-1 w-20 my-1 ml-7 mx-3 rounded bg-red-700`}
                    color={MD3Colors.error50}
                  />
                </View>
                <View style={tw`flex-row mx-3`}>
                  <ProgressBar
                    progress={1}
                    style={tw`py-1 w-15 my-1 mx-3 rounded bg-red-700`}
                    color={MD3Colors.error50}
                  />
                </View>
                <View style={tw`flex-row mx-3`}>
                  <ProgressBar
                    progress={1}
                    style={tw`py-1 w-10 my-1 mx-3 rounded bg-red-700`}
                    color={MD3Colors.error50}
                  />
                </View>
                <View style={tw`flex-row mx-3`}>
                  <ProgressBar
                    progress={1}
                    style={tw`py-1 w-5 my-1 mx-3 rounded bg-red-700`}
                    color={MD3Colors.error50}
                  />
                </View>
              </View>
              <View style={tw`mr-3`}>
                <Text>5</Text>
                <Text>4</Text>
                <Text>3</Text>
                <Text>2</Text>
                <Text>1</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={tw`font-bold text-2xl`}>
              {params.reviews.length} Reviews
            </Text>
            {params?.reviews.map((data, index) => (
              <View key={index} style={tw`bg-white mx-3 mb-9 mr-6 mt-3 p-5`}>
                <Text style={tw`font-bold text-lg`}>{data.reviewerName}</Text>
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
                  <Text> {data.date.slice(0, 10)}</Text>
                </View>
                <Text style={tw`mt-2 text-gray-600`}>{data.reviewerEmail}</Text>
                <Text style={tw`mt-2 mb-3 text-gray-700 font-bold`}>
                  {data.comment}
                </Text>
                <View style={tw`flex-row justify-end`}>
                  <Text style={tw`mt-1 mr-1 text-gray-500 font-bold`}>
                    Helpful
                  </Text>
                  <AntDesign name="like2" size={20} color="gray" />
                </View>
              </View>
            ))}
          </View>
          <View style={tw`flex-row  mx-3 justify-end`}>
            <Button
              style={tw`bg-red-700 w-50 mt-7 mb-5 mx-4`}
              mode="contained"
              onPress={() => refRBSheet.current.open()}
            >
              <Text style={tw`ml-3`}>
                <FontAwesome name="pencil" size={20} color="white" />
              </Text>{" "}
              <Text style={tw`text-red-700`}>...</Text>
              Write a review
            </Button>
          </View>
          <RBSheet
            ref={refRBSheet}
            height={600}
            useNativeDriver={false}
            customStyles={{
              wrapper: {
                backgroundColor: "rgba(191, 191, 191,0.4)",
              },
              draggableIcon: {
                backgroundColor: "#000",
              },
            }}
            customModalProps={{
              animationType: "slide",
              statusBarTranslucent: true,
            }}
            customAvoidingViewProps={{
              enabled: false,
            }}
          >
            <View style={tw`bg-slate-100`}>
              <Text style={tw`text-2xl font-bold text-center mt-2`}>
                What is you rate ?
              </Text>
              <View style={tw`flex-row justify-evenly my-7`}>
                <AntDesign name="staro" size={50} color="gray" />
                <AntDesign name="staro" size={50} color="gray" />
                <AntDesign name="staro" size={50} color="gray" />
                <AntDesign name="staro" size={50} color="gray" />
                <AntDesign name="staro" size={50} color="gray" />
              </View>
              <View>
                <View style={tw`items-center w-full`}>
                  <Text style={tw`text-xl font-bold`}>
                    please Share your opinion
                  </Text>
                  <Text style={tw`text-xl font-bold`}>about the product</Text>
                </View>

                <View
                  style={[
                    tw`mx-5 my-5`,
                    {
                      backgroundColor: "white",
                      borderBottomColor: "white",
                      borderBottomWidth: 1,
                    },
                  ]}
                >
                  <TextInput
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={40}
                    placeholder="your review"
                    placeholderTextColor="gray"
                    // onChangeText={(text) => onChangeText(text)}
                    // value={value}
                    style={tw`pb-20 bg-white `}
                  />
                </View>
              </View>
              <View style={tw`ml-5 `}>
                <IconButton
                  icon="camera"
                  iconColor="white"
                  size={30}
                  style={tw`ml-5`}
                  containerColor="#db3022"
                  onPress={() => console.log("Pressed")}
                />
                <Text>Add your photo</Text>
              </View>
              <View style={tw`mx-5 mt-9 mb-20 `}>
                <Button
                  style={tw`bg-[#DB3022] py-1 rounded-9 `}
                  onPress={() => console.log("Pressed")}
                >
                  <Text style={tw`text-white font-bold `}> SEND REVIEW</Text>
                </Button>
              </View>
            </View>
          </RBSheet>
        </View>
      </View>
    </ScrollView>
  );
};

export default AllReviews;
const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: 20,
    borderWidth: 1,
    padding: 5,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
  },
});
