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

export type StarshipsQuery = {
  allStarships: {
    edges: {
      node: {
        cargoCapacity: string;
        consumables: string;
        costInCredits: string;
        created: string;
        crew: string;
        edited: string;
        hyperdriveRating: string;
        id: string;
        length: string;
        manufacturers: string;
        maxAtmospheringSpeed: string;
        MGLT: string;
        model: string;
        name: string;
        passengers: string;
        starshipClass: string;
      };
    }[];
  };
};

export type Starship = StarshipsQuery['allStarships']['edges'][0]['node'];
