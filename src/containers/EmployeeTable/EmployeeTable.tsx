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

const employeeStatusArr: string[] = [
  'Added',
  'In-check',
  'Approved',
  'Active',
  'In-active',
];

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
    id: string
  ) => {
    await dispatch(
      updateEmployeeStatus({ id, status: e.currentTarget.innerText })
    );
    dispatch(getEmployees());
  };

  const handleAddEmployee = async (
    employeeName: string,
    employeeStatus: string
  ) => {
    if (employeeName !== '' && employeeStatus !== '') {
      if (employeeName.length >= 3) {
        await dispatch(addEmployee({ employeeName, employeeStatus }));
        dispatch(getEmployees());
        setEmployeeName('');
        setEmployeeStatus('');
      } else {
        alert('Employee name must be at least 3 characters');
      }
    } else {
      alert('Please fill all fields');
    }
  };

  const handleDeleteEmployee = async (id: string) => {
    await dispatch(deleteEmployee(id));
    dispatch(getEmployees());
  };

  return (
    <>
      {employees.length >= 1 && (
        <Card className={styles.cardStyle}>
          <Button
            className={styles.buttonStyle}
            size='large'
            onClick={() => setIsModalVisible(true)}
          >
            Add Employee
          </Button>

          <TableEmployee
            employees={employees}
            handleDeleteEmployee={handleDeleteEmployee}
            handleUpdateEmployeeStatus={handleUpdateEmployeeStatus}
            employeeStatus={employeeStatusArr}
          />
        </Card>
      )}
      <Modal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        modalTitle='Add Employee'
        onOk={() => {
          handleAddEmployee(employeeName, employeeStatus);
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
