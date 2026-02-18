import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/store';

interface NotificationState {
  unreadCount: number;
  drawerOpen: boolean;
}

const initialState: NotificationState = {
  unreadCount: 0,
  drawerOpen: false,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setUnreadCount: (state, action: PayloadAction<number>) => {
      state.unreadCount = action.payload;
    },
    decrementUnread: (state) => {
      if (state.unreadCount > 0) {
        state.unreadCount -= 1;
      }
    },
    toggleNotificationDrawer: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
    setNotificationDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.drawerOpen = action.payload;
    },
  },
});

export const {
  setUnreadCount,
  decrementUnread,
  toggleNotificationDrawer,
  setNotificationDrawerOpen,
} = notificationSlice.actions;

export const selectUnreadCount = (state: RootState) => state.notification.unreadCount;
export const selectNotificationDrawerOpen = (state: RootState) => state.notification.drawerOpen;

export default notificationSlice.reducer;
