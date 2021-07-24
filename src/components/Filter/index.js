import React from 'react';
import PropTypes from 'prop-types';
import { Radio, Button } from 'antd';
import styles from './styles.module.css';

const Filter = ({ title, onChange, onReset, value, options, id }) => {
  return (
    <div className={styles.filter} id={id}>
      <div>
        <h3>{title}</h3>
        <Button onClick={onReset}> Reset</Button>
      </div>
      <Radio.Group onChange={onChange} value={value}>
        {options.map((option) => (
          <Radio key={option} value={option}>
            {option}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Filter;
