import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/store';

interface ListState {
  selectedItems: string[];
  sortOrder: 'asc' | 'desc';
  filterText: string;
}

const initialState: ListState = {
  selectedItems: [],
  sortOrder: 'asc',
  filterText: '',
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    toggleItemSelection: (state, action: PayloadAction<string>) => {
      const index = state.selectedItems.indexOf(action.payload);
      if (index === -1) {
        state.selectedItems.push(action.payload);
      } else {
        state.selectedItems.splice(index, 1);
      }
    },
    selectAllItems: (state, action: PayloadAction<string[]>) => {
      state.selectedItems = action.payload;
    },
    clearSelection: (state) => {
      state.selectedItems = [];
    },
    toggleSortOrder: (state) => {
      state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
    },
    setFilterText: (state, action: PayloadAction<string>) => {
      state.filterText = action.payload;
    },
  },
});

export const {
  toggleItemSelection,
  selectAllItems,
  clearSelection,
  toggleSortOrder,
  setFilterText,
} = listSlice.actions;

export const selectSelectedItems = (state: RootState) => state.list.selectedItems;
export const selectSortOrder = (state: RootState) => state.list.sortOrder;
export const selectFilterText = (state: RootState) => state.list.filterText;

export default listSlice.reducer;
