import { gql, request } from 'graphql-request';

const graphqlAPI =
  'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clfr4z3et0rv001uod3mf7p7i/master';

export const getWork = async () => {
  const WORK_QUERY = gql`
    {
      works {
        id
        title
        description
        isHome
        link
        tags {
          id
          tagName
        }
      }
    }
  `;

  const result = await request(graphqlAPI, WORK_QUERY);

  return result.works;
};

export const getRecommendations = async () => {
  const RECOMMENDATIONS_QUERY = gql`
    {
      recommendations {
        id
        name
        position
        linkedin
        quote
        profileImage {
          url
          width
          height
        }
      }
    }
  `;

  const result = await request(graphqlAPI, RECOMMENDATIONS_QUERY);

  return result.recommendations;
};
