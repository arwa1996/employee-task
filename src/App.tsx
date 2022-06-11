import React from 'react';
import { Layout } from 'antd';
import { HeaderEmployee } from './components/Layout/Header/Header';
import styles from './App.module.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  const { Content } = Layout;

  return (
    <Provider store={store}>
      <Layout className={styles.layoutBg}>
        <HeaderEmployee />
        <Content className={styles.contentStyle}>
          <HomePage />
        </Content>
      </Layout>
    </Provider>
  );
}

export default App;
