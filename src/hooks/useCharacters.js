import { useQuery, gql } from '@apollo/client';

const Get_Characters = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const useCharacters = () => {
  const { error, loading, data } = useQuery(Get_Characters);
  return { error, loading, data };
};

export default useCharacters;
