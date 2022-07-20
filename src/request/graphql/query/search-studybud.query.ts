import { gql } from '@apollo/client';
import { graphQLReq } from '@request/graphql';
// import { SearchStudyRequestInput } from '@type/request-studybud';
import { SearchStudybudInput } from '@type/search-studybud';

const query = gql`
  query Query($input: SearchStudybudInput!) {
    searchStudybud(input: $input) {
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

export const searchStudybudQuery = async (variables: SearchStudybudInput): Promise<any> => {
  return await graphQLReq.query(query, { input: variables }, 'searchStudybud');
};
