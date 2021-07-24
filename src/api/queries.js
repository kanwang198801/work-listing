import { gql } from '@apollo/client';

export const GET_WORKS = gql`
  query works {
    works {
      id
      filename
      urls {
        link
      }
      exif {
        model
        make
      }
    }
  }
`;
