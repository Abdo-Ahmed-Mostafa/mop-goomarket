import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import tw from "twrnc";
import { Link } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryName } from "../../system_redux/Slices/allCategoryNameSlice";
import LoadingPage from "../loading_error/LoadingPage";

const ProductShop = () => {
  const { allNameCategory, loading } = useSelector(
    (state) => state.allNamesCategory
  );
  const dispatch = useDispatch();

  console.log(allNameCategory);
  useEffect(() => {
    dispatch(getCategoryName());
  }, []);
  return (
    <ScrollView>
      <View style={tw` bg-gray-200`}>
        {loading ? (
          <LoadingPage />
        ) : (
          <View>
            <Button
              style={tw`bg-red-700 py-1 rounded-full mx-4 mt-7`}
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              <Text>VIEW ALL ITEMS</Text>
            </Button>
            <Text style={tw`text-gray-500 mx-4 font-bold mt-2`}>
              Choose Category
            </Text>
            <View style={tw`mt-5 flex-col gap-4 mb-4`}>
              {allNameCategory.map((data, index) => (
                <View key={index} style={tw`border-b-2 pb-2 border-gray-300`}>
                  <Link
                    style={tw`font-bold mx-4 text-lg`}
                    to={{
                      screen: "CategoryPage",
                      params: { CategoryName: data },
                    }}
                  >
                    {data}
                  </Link>
                </View>
              ))}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ProductShop;
