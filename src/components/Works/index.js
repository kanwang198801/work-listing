import React from 'react';
import PropTypes from 'prop-types';
import SingleImage from '../Image';
import { Image } from 'antd';
import styles from './styles.module.css';

const Works = ({ works }) => {
  return (
    <div className={styles.worksContainer}>
      <Image.PreviewGroup>
        {works.map((work) => (
          <div className={styles.workContainer}>
            <SingleImage work={work} />
            <div>
              <strong>Model:</strong> {work.exif?.model}
            </div>
            <div>
              <strong>Make:</strong> {work.exif?.make}
            </div>
          </div>
        ))}
      </Image.PreviewGroup>
    </div>
  );
};

Works.propTypes = {
  works: PropTypes.array.isRequired
};

export default Works;
