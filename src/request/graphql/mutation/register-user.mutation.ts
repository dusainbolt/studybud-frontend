import { gql } from '@apollo/client';
import { graphQLReq } from '@request/graphql';
import { RegisterUserInput } from '@type/user';

const query = gql`
  mutation Mutation($input: RegisterUserInput!) {
    registerUser(input: $input)
  }
`;

export const registerUserMutation = async (variables: RegisterUserInput): Promise<any> => {
  return await graphQLReq.mutation(query, { input: variables }, 'registerUser');
};
