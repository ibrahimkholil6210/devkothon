import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Nav from "../components/Nav";
import SEO from "../components/utils/SEO";
import SearchResultContainer from "../components/SearchResultContainer";
import Footer from "../components/Footer";

const Search = () => {
  const router = useRouter();
  const [searchResult, setSearchResult] = useState(null);
  const queryStr = router.query.q;

  const fetchDataFromAPI = async () => {
    try {
      let response = await fetch("/api/resolveSearch?q=" + queryStr);
      response = await response.json();
      setSearchResult(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, [queryStr]);

  return (
    <>
      <SEO />
      <Nav />
      <SearchResultContainer articles={searchResult} />
      <Footer />
    </>
  );
};

export default Search;
