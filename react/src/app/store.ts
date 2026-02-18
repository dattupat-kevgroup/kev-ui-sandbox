import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../store/slices/ui/uiSlice';
import formReducer from '../store/slices/form/formSlice';
import listReducer from '../store/slices/list/listSlice';
import notificationReducer from '../store/slices/notification/notificationSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    form: formReducer,
    list: listReducer,
    notification: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
