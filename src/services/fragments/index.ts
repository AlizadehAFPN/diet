import {gql} from '@apollo/client';

export const Base_Recipe = gql`
  fragment BaseRecipe on Recipe {
    id
    title
    time {
      preparation
    }
    difficulty {
      rating
    }
    images {
      vt
    }
  }
`;
