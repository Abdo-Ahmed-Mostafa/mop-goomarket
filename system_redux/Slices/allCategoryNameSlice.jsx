import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  allNameCategory: [],
  loading: true,
  error: false,
};

export const getCategoryName = createAsyncThunk("test3", async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const data = await axios({
      method: "GET",
      url: `https://dummyjson.com/products/category-list`,
    });
    return data.data;
  } catch (err) {
    rejectWithValue(err);
  }
});

const getAllNameCategory = createSlice({
  name: "test4",
  initialState: data,
  extraReducers: (builder) => {
    builder.addCase(getCategoryName.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCategoryName.fulfilled, (state, action) => {
      state.loading = false;
      state.allNameCategory = action.payload;
    });
    builder.addCase(getCategoryName.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const allNamesCategory = getAllNameCategory.reducer;
