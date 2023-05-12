import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import labReducer from '../features/labs/labsSlice';

export const store = configureStore({
  reducer: {
    lab: labReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
