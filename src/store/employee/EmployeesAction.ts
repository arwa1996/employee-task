import { createAsyncThunk } from '@reduxjs/toolkit';
import employeeApi from '../../api/employeeApi';
import { EmployeeType } from '../../types/EmployeeType';

const getEmployees = createAsyncThunk('employee/getEmployeeState', async () => {
  const result = await employeeApi.getEmployees();
  return result.data as EmployeeType[];
});

const addEmployee = createAsyncThunk(
  'employee/addEmployee',
  async ({
    employeeName,
    employeeStatus,
  }: {
    employeeName: string;
    employeeStatus: string;
  }) => {
    await employeeApi.addEmployee(employeeName, employeeStatus);
  }
);

const updateEmployeeStatus = createAsyncThunk(
  'employee/updateEmployee',
  async ({ id, status }: { id: string; status: string }) => {
    await await employeeApi.updateEmployeeStatus(id, status);
  }
);

const deleteEmployee = createAsyncThunk(
  'employee/deleteEmployee',
  async (id: string) => {
    await employeeApi.deleteEmployee(id);
  }
);

export { getEmployees, deleteEmployee, addEmployee, updateEmployeeStatus };
