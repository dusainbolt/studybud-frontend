import { gql } from '@apollo/client';
import { graphQLReq } from '@request/graphql';
import { SearchStudyRequestInput } from '@type/request-studybud';

const query = gql`
  query Query($input: SearchStudyRequestInput!) {
    searchStudyRequest(input: $input) {
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

export const searchStudyRequestQuery = async (variables: SearchStudyRequestInput): Promise<any> => {
  return await graphQLReq.query(query, { input: variables }, 'searchStudyRequest');
};
