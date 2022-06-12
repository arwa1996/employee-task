import React, { useEffect, useState } from 'react';
import { Button, Card, Input, Space } from 'antd';
import { Modal } from '../../components/Modal/Modal';
import { Select } from '../../components/Select/Select';
import { TableEmployee } from '../../components/Table/Table';
import { useDispatch } from 'react-redux';
import {
  addEmployee,
  deleteEmployee,
  getEmployees,
  updateEmployeeStatus,
} from '../../store/employee/EmployeesAction';
import { useAppSelector } from '../../store/hooks';
import styles from './EmployeeTable.module.scss';
import { openNotification } from '../../util/notification/Notification';
import { employeeStatusArr } from '../../enums/employeeStatusArr';

export const EmployeeTable: React.FC = () => {
  const dispatch = useDispatch();
  const [employees] = useAppSelector((state) => [state.employee.employees]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [employeeName, setEmployeeName] = useState<string>('');
  const [employeeStatus, setEmployeeStatus] = useState<string>('');

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const handleUpdateEmployeeStatus = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    currentStatus: string,
    id: string
  ) => {
    await dispatch(
      updateEmployeeStatus({
        id,
        currentStatus,
        status: e.currentTarget.innerText,
      })
    );
    dispatch(getEmployees());
  };

  const validateHandleUpdateEmployeeStatus = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    currentStatus: string,
    id: string
  ) => {
    if (currentStatus !== e.currentTarget.innerText) {
      handleUpdateEmployeeStatus(e, currentStatus, id);
      openNotification('Employee Status updated successfully', 'success');
    } else {
      openNotification('Choose different employee status', 'error');
    }
  };

  const handleAddEmployee = async (
    employeeName: string,
    employeeStatus: string
  ) => {
    await dispatch(addEmployee({ employeeName, employeeStatus }));
    dispatch(getEmployees());
  };

  const ValidatehandleAddEmployee = (
    employeeName: string,
    employeeStatus: string
  ) => {
    const re = /^[A-Za-z]+$/;
    if (employeeName !== '' && employeeStatus !== '') {
      if (employeeName.length >= 3 && re.test(employeeName)) {
        handleAddEmployee(employeeName, employeeStatus);
        setEmployeeName('');
        openNotification('Employee Added successfully', 'success');
      } else {
        openNotification(
          'Employee Name should be atleast 3 characters and should contain only alphabets',
          'error'
        );
      }
    } else {
      openNotification('Please fill all fields', 'error');
    }
  };

  const handleDeleteEmployee = async (id: string) => {
    await dispatch(deleteEmployee(id));
    dispatch(getEmployees());
    openNotification('Employee Deleted successfully', 'success');
  };

  return (
    <>
      {employees.length >= 1 && (
        <Card className={styles.cardStyle}>
          <Button
            className={styles.buttonStyle}
            size='large'
            onClick={() => setIsModalVisible(true)}
            id='addEmployeeBtn'
          >
            Add Employee
          </Button>

          <TableEmployee
            employees={employees}
            handleDeleteEmployee={handleDeleteEmployee}
            handleUpdateEmployeeStatus={validateHandleUpdateEmployeeStatus}
            employeeStatus={employeeStatusArr}
          />
        </Card>
      )}
      <Modal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        modalTitle='Add Employee'
        onOk={() => {
          ValidatehandleAddEmployee(employeeName, employeeStatus);
          setIsModalVisible(false);
        }}
      >
        <Space>
          <Input
            placeholder='Employee Name'
            size='large'
            value={employeeName}
            onChange={(value) => setEmployeeName(value.target.value)}
          />

          <Select
            placeholder='Select Employee status'
            options={employeeStatusArr}
            onChange={(value) => setEmployeeStatus(value)}
          />
        </Space>
      </Modal>
    </>
  );
};
