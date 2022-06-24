import { gql } from '@apollo/client';
import { graphQLReq } from '@request/graphql';
import { CreateStudyRequestInput } from '@type/request-studybud';

const query = gql`
  mutation Mutation($input: CreateStudyRequestInput!) {
    createStudyRequest(input: $input) {
      _id
      createdAt
      missionDes
      point
      pointValue
      title
      requestDes
      status
      missionData {
        name
      }
      standardData {
        name
      }
      topicData {
        name
      }
    }
  }
`;

export const createStudyMutation = async (variables: CreateStudyRequestInput): Promise<any> => {
  return await graphQLReq.mutation(query, { input: variables }, 'createStudyRequest');
};
