import styled from "styled-components";
import Container from "./utils/Container";
import FlexContainer from "./utils/FlexContainer";
import Card from "./Card";

const SearchResultContainerStyled = styled.div`
  background-color: #f9f9f9;
  padding: 25px 0;
`;

const SearchResultContainer = ({ articles }) => {
  return (
    <SearchResultContainerStyled>
      <Container>
        <h1>অনুসন্ধান ফলাফল</h1>
        <FlexContainer>
          {articles ? (
            articles.data.articels.length === 0 ? (
              <div>কোন ফলাফল পাওয়া যায় নি</div>
            ) : (
              articles.data?.articels.map((item, index) => {
                return <Card item={item} key={index} />;
              })
            )
          ) : (
            <div>অনুসন্ধান চলছে, দয়া করে অপেক্ষা করুন!</div>
          )}
        </FlexContainer>
      </Container>
    </SearchResultContainerStyled>
  );
};

export default SearchResultContainer;
