import {
  getModelsAndMakes,
  filterWorks,
  mapUnknownModelAndMakeToWorks
} from '../utils';
import { works, filters } from '../../../testData';

describe('Utils Test Suite', () => {
  it('Should invoke getModelsAndMakes correctly', () => {
    expect(getModelsAndMakes(works)).toStrictEqual({
      models: ['NIKON D80', ''],
      makes: ['NIKON CORPORATION', '']
    });
  });

  it('Should invoke filterWorks correctly', () => {
    const filteredWorks = [...works];
    filteredWorks.length = 1;
    expect(filterWorks(works, filters)).toStrictEqual(filteredWorks);
  });

  it('Should invoke mapUnknownModelAndMakeToWorks correctly', () => {
    expect(mapUnknownModelAndMakeToWorks(works)).toStrictEqual(
      works.map((work) => ({
        ...work,
        exif: {
          ...work.exif,
          model: work?.exif?.model || 'Unknown Model',
          make: work?.exif?.make || 'Unknown Make'
        }
      }))
    );
  });
});
