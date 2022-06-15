import { gql } from '@apollo/client';
import { graphQLReq } from '@request/graphql';
import { LoginUserInput } from '@type/user';

const query = gql`
  mutation Mutation($input: LoginUserInput!) {
    loginUser(input: $input) {
      user {
        _id
        avatar
        birthday
        createdAt
        email
        firstName
        gender
        lastName
        name
        roles
        phone
        contact
        address
        school
        description
        socialId
        socialType
        status
        updatedAt
        username
      }
      token
    }
  }
`;

export const loginUserMutation = async (variables: LoginUserInput): Promise<any> => {
  return await graphQLReq.mutation(query, { input: variables }, 'loginUser');
};
