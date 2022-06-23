import { gql } from '@apollo/client';
import { graphQLReq } from '@request/graphql';
import { SearchStudyRequestInput } from '@type/request-studybud';

const query = gql`
  query Query($input: SearchStudyRequestInput!) {
    searchStudyRequest(input: $input) {
      _id
      createdAt
    }
  }
`;

export const searchStudyRequestQuery = async (variables: SearchStudyRequestInput): Promise<any> => {
  return await graphQLReq.query(query, { input: variables }, 'searchStudyRequest');
};
