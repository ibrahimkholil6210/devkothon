import { useEffect } from "react";
import { gql } from "@apollo/client";
import { createApolloClient } from "../../lib/apolloClient";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SEO from "../../components/utils/SEO";
import ContentContainer from "../../components/ContentContainer";
import HeroDetails from "../../components/HeroDetails";

const Post = ({ post }) => {
  useEffect(async () => {
    const updateCount = await fetch("/api/updateCount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count: 1 }),
    });
    const parseUpdate = await updateCount.json();
    console.log(parseUpdate);
  }, []);
  return (
    <>
      <SEO pageData={post.title} />
      <Nav />
      <HeroDetails pageData={post} serial={post.serial} />
      <ContentContainer details={post.description} serial={post.serial} id={post.id} />
      <Footer />
    </>
  );
};
export default Post;

export async function getStaticPaths() {
  const apolloClient = await createApolloClient();
  const posts = gql`
    query {
      posts {
        id
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: posts,
  });

  const paths = data.posts.map((post) => {
    return { params: { pid: post.id } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const apolloClient = await createApolloClient();
  const post = gql`
    query($id: ID!) {
      post(id: $id) {
        title
        id
        description
        createdAt
        serial {
          title
          posts {
            title
            id
          }
        }
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: post,
    variables: { id: params.pid },
  });

  return {
    props: { post: data.post },
  };
}
