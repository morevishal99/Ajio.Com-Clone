import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
  name: "filterValue",
  initialState: {
    SearchValue: "",
    Category: "",
    Brand: "",
    Price: "",
    Fabric: "",
    Rating: "",
    currentPageRedux: 1,
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.SearchValue = action.payload;
    },
    setCategoryValue: (state, action) => {
      state.Category = action.payload;
    },
    setBrand: (state, action) => {
      state.Brand = action.payload;
    },
    setPrice: (state, action) => {
      state.Price = action.payload;
    },
    setFabric: (state, action) => {
      state.Fabric = action.payload;
    },
    setRating: (state, action) => {
      state.Rating = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPageRedux = action.payload;
    },
  },
});
export const {
  setSearchValue,
  setCategoryValue,
  setCurrentPage,
  setBrand,
  setFabric,
  setPrice,
  setRating,
} = FilterSlice.actions;

export default FilterSlice.reducer;
