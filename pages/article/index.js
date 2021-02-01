import { gql } from "@apollo/client";
import Nav from "../../components/Nav";
import SEO from "../../components/utils/SEO";
import ArticleContainer from "../../components/ArticlesContainer";
import Footer from "../../components/Footer";
import { createApolloClient } from "../../lib/apolloClient";

export default function Home({ data }) {
  return (
    <>
      <SEO />
      <Nav />
      <ArticleContainer articles={data.articels} />
      <Footer />
    </>
  );
}

export async function getStaticProps(ctx) {
  const apolloClient = await createApolloClient();

  const articles = gql`
    query Launcher {
      articels {
        id
        title
        description
        cover {
          url
        }
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
