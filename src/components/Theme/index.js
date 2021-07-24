import { Layout } from 'antd';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import Loader from '../../components/Loader';
import styles from './styles.module.css';

const { Footer, Content } = Layout;

const Theme = ({ children, id, loading = false, error = null }) => {
  return (
    <Layout className={styles.layout} style={{ minHeight: '100vh' }} id={id}>
      <Content className={styles.main}>
        {loading ? (
          <Loader />
        ) : error ? (
          <p> Error: {error} </p>
        ) : (
          <div>{children}</div>
        )}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Copyright &copy;</Footer>
    </Layout>
  );
};
export default memo(Theme);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string
};
