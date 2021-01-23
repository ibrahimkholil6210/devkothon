import styled from "styled-components";
import Container from "./utils/Container";
import FlexContainer from "./utils/FlexContainer";
import Card from "./Card";
import Imgbg from "../assets/img/dark-bg.jpg";

const ArticleContainerStyled = styled.div`
  background-color: #f9f9f9;
  padding: 25px 0;
  margin: 0px 0 50px 0;
  color: ${(props) => props.theme.colors.invert};
  background-image: url(${Imgbg});
  background-size: cover;
`;

const StyledTitle = styled.h1``;

const SeriesContainer = ({ serials, post }) => {
  return (
    <ArticleContainerStyled>
      <Container>
        <StyledTitle>সিরিজ সূমহ</StyledTitle>
        <FlexContainer>
          {serials.map((item, index) => {
            return <Card item={item} key={index} series post={post} />;
          })}
        </FlexContainer>
      </Container>
    </ArticleContainerStyled>
  );
};

export default SeriesContainer;
