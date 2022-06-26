import { gql } from '@apollo/client';
import { graphQLReq } from '@request/graphql';
import { UpdateStudyRequestInput } from '@type/request-studybud';

const query = gql`
  mutation Mutation($input: UpdateStudyRequestInput!) {
    updateStudyRequest(input: $input) {
      _id
      createdAt
      missionDes
      point
      standard
      mission
      topic
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

export const updateStudyMutation = async (variables: UpdateStudyRequestInput): Promise<any> => {
  return await graphQLReq.mutation(query, { input: variables }, 'updateStudyRequest');
};
