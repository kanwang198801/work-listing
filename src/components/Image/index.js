import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'antd';
import styles from './styles.module.css';
import placeholder from '../../assets/placeholder.jpg';

const WIDTH = 135;
const HEIGHT = 135;
const SingleImage = ({ work }) => {
  return (
    <div key={work.id} className={styles.image}>
      <Image
        width={WIDTH}
        height={HEIGHT}
        src={work.urls?.[0]?.link}
        alt={work.filename}
        preview={{ src: work.urls?.[2]?.link }}
        fallback={placeholder}
        placeholder={
          <Image
            preview={false}
            src={placeholder}
            width={WIDTH}
            height={HEIGHT}
          />
        }
      />
    </div>
  );
};

SingleImage.propTypes = {
  work: PropTypes.object.isRequired
};

export default memo(SingleImage);
