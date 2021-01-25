import { gql } from "@apollo/client";
import { createApolloClient } from "../../lib/apolloClient";

export default async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  const apolloClient = await createApolloClient();

  const query = gql`
    query($q: ID!) {
      articels(where: { title_contains: $q }) {
        id
        title
        description
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: query,
    variables: { q: req.query.q },
  });

  if (req.method === "GET") {
    res.end(
      JSON.stringify({
        status: "success",
        code: 200,
        data,
      })
    );
  } else {
    res.end(
      JSON.stringify({
        status: "failed",
        code: 404,
      })
    );
  }
};
