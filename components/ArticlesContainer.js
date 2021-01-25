import styled from "styled-components";
import Container from "./utils/Container";
import FlexContainer from "./utils/FlexContainer";
import Card from "./Card";

const ArticleContainerStyled = styled.div`
  background-color: #f9f9f9;
  padding: 25px 0;
`;

const StyledTitle = styled.h1``;

const ArticleContainer = (props) => {
  return (
    <ArticleContainerStyled>
      <Container>
        <StyledTitle>আর্টিকেল সূমহ</StyledTitle>
        <FlexContainer>
          {props.articles.map((item, index) => {
            return <Card item={item} key={index} />;
          })}
        </FlexContainer>
      </Container>
    </ArticleContainerStyled>
  );
};

export default ArticleContainer;
