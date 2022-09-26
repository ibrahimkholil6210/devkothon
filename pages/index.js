import Nav from "../components/Nav";
import SEO from "../components/utils/SEO";
import Banner from "../components/Banner";
import ArticleContainer from "../components/ArticlesContainer";
import SeriesContainer from "../components/SeriesContainer";
import Footer from "../components/Footer";
import client from "../lib/contentful";

export default function Home({ pageData }) {

  return (
    <>
      <SEO />
      <Nav />
      <Banner />
      <ArticleContainer articles={pageData.articles} />
      <SeriesContainer series={pageData.series} />
      <Footer />
    </>
  );
}

export async function getStaticProps(ctx) {

  const series = await client.getEntries({
    content_type: 'series',
  })

  const articles = await client.getEntries({
    content_type: 'articles'
  })
  
  return {
    props: {
      pageData: {
        series,
        articles
      },
    },
  };
}
