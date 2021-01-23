import { gql } from "@apollo/client";
import markdownToHtml from "../../lib/markdownToHTML";
import { createApolloClient } from "../../lib/apolloClient";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SEO from "../../components/utils/SEO";
import ContentContainer from "../../components/ContentContainer";
import HeroDetails from "../../components/HeroDetails";

const Article = ({ data, content }) => {
  return (
    <>
      <SEO pageData={data.articel} />
      <Nav />
      <HeroDetails pageData={data.articel} />
      <ContentContainer details={content} />
      <Footer />
    </>
  );
};

export default Article;

export async function getStaticPaths() {
  const apolloClient = await createApolloClient();
  const articles = gql`
    query {
      articels {
        id
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: articles,
  });

  const paths = data.articels.map((articel) => ({
    params: { id: articel.id },
  }));

  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  const apolloClient = await createApolloClient();
  const articles = gql`
    query($id: ID!) {
      articel(id: $id) {
        title
        description
        createdAt
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: articles,
    variables: { id: context.params.id },
  });

  const content = await markdownToHtml(data.articel.description || "");

  return {
    props: {
      data,
      content,
    },
    revalidate: 10,
  };
}
