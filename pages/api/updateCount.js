import { gql } from "@apollo/client";
import { createApolloClient } from "../../lib/apolloClient";

export default async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  const apolloClient = await createApolloClient();

  if (req.method === "POST") {
    if (req.body.ref === "article") {
      const mutation = gql`
        mutation UpdateArticel($id: ID!, $count: Int!) {
          updateArticel(input: { where: { id: $id }, data: { count: $count } }) {
            articel {
              title
              count
            }
          }
        }
      `;

      const { data } = await apolloClient.mutate({
        mutation: mutation,
        variables: { id: req.body.id, count: req.body.count + 1 },
      });
      res.end(
        JSON.stringify({
          status: "success",
          code: 200,
          data,
        })
      );
    }
  } else {
    res.end(
      JSON.stringify({
        status: "failed",
        code: 404,
      })
    );
  }
};
