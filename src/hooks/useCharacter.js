import { useQuery, gql } from '@apollo/client';
const Get_Character = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      episode {
        name
        episode
      }
    }
  }
`;
const useCharacter = (id) => {
  const { error, loading, data } = useQuery(Get_Character, {
    variables: {
      id,
    },
  });
  return { error, loading, data };
};

export default useCharacter;
