import {gql} from '@apollo/client';

export const STARSHIPS_QUERY = gql`
  query StarshipsQuery {
    allStarships {
      edges {
        node {
          cargoCapacity
          consumables
          costInCredits
          created
          crew
          edited
          hyperdriveRating
          id
          length
          manufacturers
          maxAtmospheringSpeed
          MGLT
          model
          name
          passengers
          starshipClass
        }
      }
    }
  }
`;
