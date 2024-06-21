import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  products: [],
  loading: true,
  error: false,
  singleProd: [],
  singleProdError: false,
  singleProdLoading: true,
};

export const getDataAllProducts = createAsyncThunk(
  "products",
  async (data, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: "https://dummyjson.com/products",
      });
      return data.data;
    } catch (err) {
      console.log(err.massage);
      rejectWithValue(err);
    }
  }
);
export const SingleProduct = createAsyncThunk(
  "productsSingle",
  async (dataProd, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://dummyjson.com/products/${dataProd}`,
      });
      return data.data;
    } catch (err) {
      console.log(err.massage);
      rejectWithValue(err);
    }
  }
);

const productsSlices = createSlice({
  name: "getDataProducts",
  initialState: data,
  extraReducers: (builder) => {
    builder.addCase(getDataAllProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getDataAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
    });
    builder.addCase(getDataAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });

    /////////////////////////////
    builder.addCase(SingleProduct.pending, (state, action) => {
      state.singleProdLoading = true;
    });
    builder.addCase(SingleProduct.fulfilled, (state, action) => {
      state.singleProd = action.payload;
      state.singleProdLoading = false;
    });
    builder.addCase(SingleProduct.rejected, (state, action) => {
      state.singleProdError = true;
      state.singleProdLoading = false;
    });
  },
});

export const allDataProducts = productsSlices.reducer;
