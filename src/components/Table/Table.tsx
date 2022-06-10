/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { EmployeeType } from '../../App';
import styles from './Table.module.scss';

interface TableProps {
  employees: EmployeeType[];
  handleDeleteEmployee: (id: string) => void;
  handleUpdateEmployeeStatus: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => void;
}

const TableEmployee: React.FC<TableProps> = ({
  employees,
  handleDeleteEmployee,
  handleUpdateEmployeeStatus,
}) => {
  const employeeStatus = [
    'Added',
    'In-check',
    'Approved',
    'Active',
    'In-active',
  ];

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
      render: (_, record) => {
        let id = record.id;
        const statusArray = employeeStatus.map((status) => {
          return (
            <div onClick={(e) => handleUpdateEmployeeStatus(e, id)}>
              <a>{status + ' '}</a>
            </div>
          );
        });
        return (
          <Space size='large'>
            {statusArray}
            <div onClick={(e) => handleDeleteEmployee(id)}>
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

export default TableEmployee;
