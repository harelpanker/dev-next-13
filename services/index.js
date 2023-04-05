import { gql, request } from 'graphql-request';

const graphqlAPI =
  'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clfr4z3et0rv001uod3mf7p7i/master';

export const getWork = async () => {
  const WORK_QUERY = gql`
    {
      works {
        id
        title
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
