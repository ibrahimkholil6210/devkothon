import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import markdownToHtml from "../../lib/markdownToHTML";
import { createApolloClient } from "../../lib/apolloClient";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SEO from "../../components/utils/SEO";
import ContentContainer from "../../components/ContentContainer";
import HeroDetails from "../../components/HeroDetails";

const Article = ({ data, content, allArticles }) => {
  const [count, setCount] = useState(data.articel.count);
  const router = useRouter();

  useEffect(async () => {
    const updateCount = await fetch("/api/updateCount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count: data.articel.count, ref: "article", id: router.query.id }),
    });
    const parseUpdate = await updateCount.json();
    setCount(parseUpdate.data.updateArticel.articel.count);
  }, []);
  return (
    <>
      <SEO pageData={data.articel} />
      <Nav />
      <HeroDetails pageData={data.articel} count={count} />
      <ContentContainer details={content} articles={allArticles} />
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
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  const apolloClient = await createApolloClient();
  const article = gql`
    query($id: ID!) {
      articel(id: $id) {
        title
        description
        createdAt
        count
        tag {
          title
        }
        cover {
          url
        }
        author {
          username
          avatar {
            url
          }
        }
      }
      articels {
        id
        title
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: article,
    variables: { id: context.params.id },
  });

  const content = await markdownToHtml(data.articel.description || "");

  return {
    props: {
      data,
      content,
      allArticles: data.articels,
    },
  };
}
