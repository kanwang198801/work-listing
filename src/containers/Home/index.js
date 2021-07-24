import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Theme from '../../components/Theme';
import Works from '../../components/Works';
import Filter from '../../components/Filter';
import { GET_WORKS } from '../../api/queries';
import {
  getModelsAndMakes,
  filterWorks,
  mapUnknownModelAndMakeToWorks
} from './utils';

const Home = () => {
  const { loading, error, data } = useQuery(GET_WORKS);
  const [works, setWorks] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [models, setModels] = useState([]);
  const [makes, setMakes] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedMake, setSelectedMake] = useState('');

  useEffect(() => {
    if (!data?.works) return;
    const mappedWorks = mapUnknownModelAndMakeToWorks(data.works);
    const { models, makes } = getModelsAndMakes(mappedWorks);
    setWorks(mappedWorks);
    setFilteredWorks(mappedWorks);
    setModels(models);
    setMakes(makes);
  }, [data]);

  useEffect(() => {
    const filters = [
      { type: 'model', name: selectedModel },
      { type: 'make', name: selectedMake }
    ];
    setFilteredWorks(filterWorks(works, filters));
  }, [works, selectedModel, selectedMake]);

  return (
    <Theme loading={loading} error={error} id="home">
      <Filter
        title="Filter by model"
        onChange={(e) => setSelectedModel(e.target.value)}
        onReset={() => setSelectedModel('')}
        options={models}
        value={selectedModel}
        id="model-filter"
      />
      <Filter
        title="Filter by make"
        onChange={(e) => setSelectedMake(e.target.value)}
        onReset={() => setSelectedMake('')}
        options={makes}
        value={selectedMake}
        id="make-filter"
      />
      <Works works={filteredWorks} />
    </Theme>
  );
};

export default Home;
