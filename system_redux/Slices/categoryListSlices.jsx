import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  nameCategory: [],
  loading: true,
  error: false,
};

export const getCategory = createAsyncThunk("test", async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const data = await axios({
      method: "GET",
      url: `https://dummyjson.com/products/category/${id}`,
    });
    return data.data;
  } catch (err) {
    rejectWithValue(err);
  }
});

const getNameCategory = createSlice({
  name: "test2",
  initialState: data,
  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.nameCategory = action.payload.products;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const namesCategory = getNameCategory.reducer;
