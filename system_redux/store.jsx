import { configureStore } from "@reduxjs/toolkit";
import { allDataProducts } from "./Slices/ProductsSlices";

const store = configureStore({
  reducer: {
    allDataProducts,
  },
});

export default store;
