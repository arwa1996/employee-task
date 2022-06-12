/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import styles from './Table.module.scss';
import { EmployeeType } from '../../types/EmployeeType';

interface TableProps {
  employees: EmployeeType[];
  employeeStatus: string[];
  handleDeleteEmployee: (id: string) => void;
  handleUpdateEmployeeStatus: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    currentStatus: string,
    id: string
  ) => void;
}

export const TableEmployee: React.FC<TableProps> = ({
  employees,
  handleDeleteEmployee,
  handleUpdateEmployeeStatus,
  employeeStatus,
}) => {
  const columns: ColumnsType<EmployeeType> = [
    {
      title: 'Employee Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_, { status }) => <Tag color='geekblue'>{status}</Tag>,
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record, index) => {
        let id = record.id;
        const statusArray = employeeStatus.map((status, index) => {
          let currentStatus = record.status as unknown as string;
          return (
            <div
              key={index}
              onClick={(e) => handleUpdateEmployeeStatus(e, currentStatus, id)}
            >
              <a>{status}</a>
            </div>
          );
        });
        return (
          <Space size='large'>
            {statusArray}
            <div onClick={() => handleDeleteEmployee(id)}>
              <a>Delete</a>
            </div>
          </Space>
        );
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={employees}
      className={styles.tableStyle}
      rowClassName={() => styles.rowClassName1}
    />
  );
};
