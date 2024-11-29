import { createSlice } from "@reduxjs/toolkit";
import { testimonialsData } from "../../Data/TestimonialsData";

const initialState = {
  testimonials: testimonialsData
};

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
});


export default testimonialsSlice.reducer;
