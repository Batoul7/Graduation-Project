import { createSlice } from "@reduxjs/toolkit";
import { faqData } from "../../Data/faqData";

interface FAQ {
  question: string;
  answer: string;
}


const initialState: FAQ[] = faqData;


const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {},
});

export default faqSlice.reducer;
