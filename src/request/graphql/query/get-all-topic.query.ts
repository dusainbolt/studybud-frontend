import { gql } from '@apollo/client';
import { graphQLReq } from '@request/graphql';

const query = gql`
  query Query {
    getAllTopic {
      _id
      name
      missionData {
        _id
        name
        topic
        standardData {
          _id
          mission
          name
          point
          pointData
          pointType
        }
      }
    }
  }
`;

export const getAllTopicQuery = async (): Promise<any> => {
  return await graphQLReq.query(query, {}, 'getAllTopic');
};
