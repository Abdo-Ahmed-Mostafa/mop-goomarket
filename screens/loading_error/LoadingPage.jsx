import { View, Text } from "react-native";
import React, { useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

const LoadingPage = () => {
  return (
    <Spinner
      visible={true}
      textContent={"Loading..."}
      textStyle={{ color: "#FFF" }}
    />
  );
};0

export default LoadingPage;
