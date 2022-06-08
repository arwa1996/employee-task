import React from 'react';
import { Card, Layout } from 'antd';
import { HeaderMVP } from './components/Layout/Header/Header';
import TableEmployee from './components/Table/TableProjects/Table';
import styles from './App.module.scss';
import './App.module.scss';

function App() {
  const { Content } = Layout;
  return (
    <Layout className={styles.layoutBg}>
      <HeaderMVP />
      <Content className={styles.contentStyle}>
        <Card className={styles.cardStyle}>
          <TableEmployee />
        </Card>
      </Content>
    </Layout>
  );
}

export default App;
