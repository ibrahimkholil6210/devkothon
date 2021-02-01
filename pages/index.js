import { gql } from "@apollo/client";
import Nav from "../components/Nav";
import SEO from "../components/utils/SEO";
import Banner from "../components/Banner";
import ArticleContainer from "../components/ArticlesContainer";
import SeriesContainer from "../components/SeriesContainer";
import Footer from "../components/Footer";
import { createApolloClient } from "../lib/apolloClient";

export default function Home({ pageData }) {
  const articles = pageData.ROOT_QUERY.articels.map((a) => {
    return pageData[a.__ref];
  });
  const serials = pageData.ROOT_QUERY.serials.map((s) => {
    return pageData[s.__ref];
  });
  return (
    <>
      <SEO />
      <Nav />
      <Banner />
      <ArticleContainer articles={articles} />
      <SeriesContainer serials={serials} />
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
        createdAt
        count
        cover {
          url
        }
        author {
          username
        }
      }
      serials {
        id
        title
        createdAt
        cover {
          url
        }
        author {
          username
        }
      }
    }
  `;

  await apolloClient.query({
    query: articles,
  });
  return {
    props: {
      pageData: apolloClient.cache.extract(),
    },
  };
}
