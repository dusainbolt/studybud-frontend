import { gql } from '@apollo/client';
import { graphQLReq } from '@request/graphql';
import { CreateStudyRequestInput } from '@type/request-studybud';

const query = gql`
  mutation Mutation($input: CreateStudyRequestInput!) {
    createStudyRequest(input: $input) {
      _id
    }
  }
`;

export const createStudyMutation = async (variables: CreateStudyRequestInput): Promise<any> => {
  return await graphQLReq.mutation(query, { input: variables }, 'createStudyRequest');
};
