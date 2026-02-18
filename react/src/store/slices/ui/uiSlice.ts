import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/store';

interface Toast {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

interface UiState {
  sidebarCollapsed: boolean;
  toasts: Toast[];
}

const initialState: UiState = {
  sidebarCollapsed: false,
  toasts: [],
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.sidebarCollapsed = action.payload;
    },
    addToast: (state, action: PayloadAction<Omit<Toast, 'id'>>) => {
      state.toasts.push({ id: crypto.randomUUID(), ...action.payload });
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter((t) => t.id !== action.payload);
    },
    clearToasts: (state) => {
      state.toasts = [];
    },
  },
});

export const { toggleSidebar, setSidebarCollapsed, addToast, removeToast, clearToasts } =
  uiSlice.actions;

export const selectSidebarCollapsed = (state: RootState) => state.ui.sidebarCollapsed;
export const selectToasts = (state: RootState) => state.ui.toasts;

export default uiSlice.reducer;
