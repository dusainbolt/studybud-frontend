import { gql } from '@apollo/client';
import { graphQLReq } from '@request/graphql';
// import { SearchStudyRequestInput } from '@type/request-studybud';
import { SearchStudybudInput } from '@type/search-studybud';

const query = gql`
  query Query($input: SearchStudybudInput!) {
    searchStudybud(input: $input) {
      user {
        _id
        email
        username
        name
        firstName
        lastName
        avatar
        description
        phone
        contact
        address
        school
        socialType
        socialId
        gender
        birthday
        status
        createdAt
        updatedAt
      }
    }
  }
`;

export const searchStudybudQuery = async (variables: SearchStudybudInput): Promise<any> => {
  return await graphQLReq.query(query, { input: variables }, 'searchStudybud');
};
