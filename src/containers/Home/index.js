import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Theme from '../../components/Theme';
import Works from '../../components/Works';
import { GET_WORKS } from '../../api/queries';

const Home = () => {
  const { loading, error, data } = useQuery(GET_WORKS);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    if (!data?.works) return;
    setWorks(data.works);
  }, [data]);

  return (
    <Theme loading={loading} error={error} id="home">
      <Works works={works} />;
    </Theme>
  );
};

export default Home;
