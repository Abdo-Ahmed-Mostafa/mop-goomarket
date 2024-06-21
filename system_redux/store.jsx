import { configureStore } from "@reduxjs/toolkit";
import { allDataProducts } from "./Slices/ProductsSlices";
import { namesCategory } from "./Slices/categoryListSlices";
import { allNamesCategory } from "./Slices/allCategoryNameSlice";
const store = configureStore({
  reducer: {
    allDataProducts,
    namesCategory,
    allNamesCategory,
  },
});

export default store;
