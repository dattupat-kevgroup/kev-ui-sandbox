import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../store/slices/ui/slice';
import formReducer from '../store/slices/form/slice';
import listReducer from '../store/slices/list/slice';
import notificationReducer from '../store/slices/notification/slice';

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
