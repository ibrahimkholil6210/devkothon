import { gql } from "@apollo/client";
import { createApolloClient } from "../../lib/apolloClient";
import SEO from "../../components/utils/SEO";
import Nav from "../../components/Nav";
import SeriesContainer from "../../components/SeriesContainer";
import Footer from ".././../components/Footer";


const Posts = (props) => {
  return (
    <>
      <SEO title={props.data.serial.title} />
      <Nav />
      <SeriesContainer serials={props.data.serial.posts} post />
      <Footer />
    </>
  );
};

export default Posts;

export async function getStaticPaths() {
  const apolloClient = await createApolloClient();
  const serials = gql`
    query {
      serials {
        title
        id
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: serials,
  });

  const paths = data.serials.map((serial) => ({
    params: { sid: serial.id },
  }));

  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  const apolloClient = await createApolloClient();
  const posts = gql`
    query($id: ID!) {
      serial(id: $id) {
        id
        title
        author {
          username
        }
        posts {
          id
          title
          cover {
            url
          }
        }
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: posts,
    variables: { id: context.params.sid },
  });

  // console.log(context.params.sid);

  return {
    props: { data },
  };
}
