import { Spin } from 'antd';
import { useAppSelector } from '../../store/hooks';
import styles from './Loading.module.scss';

export const Loading: React.FC = () => {
  const loading = useAppSelector((state) => state.common.loading);
  if (loading)
    return (
      <div className={styles.backdrop}>
        <Spin className={styles.spinner} tip='Loading...' size='large' />
      </div>
    );
  return <></>;
};
