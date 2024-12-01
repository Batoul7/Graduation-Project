import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  agreeToTerms: boolean;
}

interface FormState {
  formEntries: FormData[]; 
}

const initialState: FormState = {
  formEntries: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<FormData>) => {
      state.formEntries.push(action.payload); 
    },
    resetForm: (state) => {
      state.formEntries = [];
    },
  },
});

export const { updateForm, resetForm } = formSlice.actions;
export default formSlice.reducer;