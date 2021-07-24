export const getModelsAndMakes = (works) => {
  const fetchedModels = [];
  const fetchedMakes = [];
  works?.forEach((work) => {
    fetchedModels.push(work.exif?.model);
    fetchedMakes.push(work.exif?.make);
  });
  return {
    models: [...new Set(fetchedModels)],
    makes: [...new Set(fetchedMakes)]
  };
};

export const filterWorks = (works, filters) =>
  works.filter((work) => {
    return filters.every((f) => {
      if (!f.name) return true;
      return work?.exif[f.type] === f.name;
    });
  });

export const mapUnknownModelAndMakeToWorks = (works) =>
  works.map((item) => ({
    ...item,
    exif: {
      ...item.exif,
      model: item?.exif?.model || 'Unknown Model',
      make: item?.exif?.make || 'Unknown Make'
    }
  }));
