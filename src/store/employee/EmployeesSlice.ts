import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeType } from '../../types/EmployeeType';
import { getEmployees } from './EmployeesAction';

type employeesState = {
  employees: EmployeeType[];
};

const initialState: employeesState = {
  employees: [],
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
      }
    );
  },
});

export default employeesSlice.reducer;
