/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const apiUrl = 'http://localhost:3000/employees';
export default {
  getEmployees: () => axios.get(apiUrl),
  updateEmployeeStatus: (id, employeeStatus) =>
    axios.patch(`${apiUrl}/${id}`, {
      status: employeeStatus,
    }),
  addEmployee: (employeeName, employeeStatus) =>
    axios.post(apiUrl, {
      name: employeeName,
      status: employeeStatus,
    }),
  deleteEmployee: (id) => axios.delete(`${apiUrl}/${id}`),
};
