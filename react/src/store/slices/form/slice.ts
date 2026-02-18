import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/store';

interface FormState {
  activeSection: string | null;
  dirtyFields: string[];
  lastSubmittedAt: string | null;
}

const initialState: FormState = {
  activeSection: null,
  dirtyFields: [],
  lastSubmittedAt: null,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<string | null>) => {
      state.activeSection = action.payload;
    },
    markFieldDirty: (state, action: PayloadAction<string>) => {
      if (!state.dirtyFields.includes(action.payload)) {
        state.dirtyFields.push(action.payload);
      }
    },
    markFieldClean: (state, action: PayloadAction<string>) => {
      state.dirtyFields = state.dirtyFields.filter((f) => f !== action.payload);
    },
    clearDirtyFields: (state) => {
      state.dirtyFields = [];
    },
    setLastSubmittedAt: (state, action: PayloadAction<string>) => {
      state.lastSubmittedAt = action.payload;
      state.dirtyFields = [];
    },
  },
});

export const {
  setActiveSection,
  markFieldDirty,
  markFieldClean,
  clearDirtyFields,
  setLastSubmittedAt,
} = formSlice.actions;

export const selectActiveSection = (state: RootState) => state.form.activeSection;
export const selectDirtyFields = (state: RootState) => state.form.dirtyFields;
export const selectLastSubmittedAt = (state: RootState) => state.form.lastSubmittedAt;

export default formSlice.reducer;
