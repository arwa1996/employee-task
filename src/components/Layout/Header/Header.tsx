import React from 'react';
import { Layout } from 'antd';
import styles from './Header.module.scss';

export const HeaderEmployee: React.FC = () => {
  const { Header } = Layout;

  return (
    <Header className={styles.headerStyle}>
      <a className={styles.headerLogoStyle} href='https://workmotion.com/'>
        <img
          src='https://workmotion.com/wp-content/uploads/2021/12/logo-workmotion.svg'
          alt='workmotion'
        />
      </a>
    </Header>
  );
};
