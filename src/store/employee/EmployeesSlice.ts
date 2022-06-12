import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeType } from '../../types/EmployeeType';
import { getEmployees } from './EmployeesAction';

type employeesState = {
  employees: EmployeeType[];
  loading: boolean;
};

const initialState: employeesState = {
  employees: [],
  loading: false,
};

const employeesSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getEmployees.fulfilled,
      (state, action: PayloadAction<EmployeeType[]>) => {
        state.employees = action.payload;
        state.loading = false;
      }
    );
  },
});

export default employeesSlice.reducer;
