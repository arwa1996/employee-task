import { configureStore } from '@reduxjs/toolkit';
import employeesSlice from './employee/EmployeesSlice';

const store = configureStore({
  reducer: {
    employee: employeesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
