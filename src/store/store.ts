import { configureStore } from '@reduxjs/toolkit';
import commonSlice from './common/CommonSlice';
import employeesSlice from './employee/EmployeesSlice';

const store = configureStore({
  reducer: {
    employee: employeesSlice,
    common: commonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
