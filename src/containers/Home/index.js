import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Theme from '../../components/Theme';
import { GET_WORKS } from '../../api/queries';

const Home = () => {
  const { loading, error, data } = useQuery(GET_WORKS);
  console.info(data);
  return <Theme loading={loading} error={error} id="home"></Theme>;
};

export default Home;
