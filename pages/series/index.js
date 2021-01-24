import { gql } from "@apollo/client";
import { createApolloClient } from "../../lib/apolloClient";
import SEO from "../../components/utils/SEO";
import Nav from "../../components/Nav";
import SeriesContainer from "../../components/SeriesContainer";
import Footer from "../../components/Footer";

const Series = ({ data }) => {
  return (
    <>
      <SEO />
      <Nav />
      <SeriesContainer serials={data.serials} />
      <Footer />
    </>
  );
};

export default Series;

export async function getStaticProps(ctx) {
  const apolloClient = await createApolloClient();

  const articles = gql`
    query {
      serials {
        id
        title
        createdAt
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: articles,
  });
  return {
    props: {
      data,
    },
  };
}
