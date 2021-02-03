import styled from "styled-components";
import moment from "moment";
import Container from "./utils/Container";
import FlexContainer from "./utils/FlexContainer";

const HeroContentLeftStyled = styled.div`
  width: 39%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const HeroContentRightStyled = styled.div`
  width: 59%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ContentTopStyled = styled.div`
  margin-bottom: 20px;
`;

const AuthorImgContainerStyled = styled.div`
  width: 46px;
  height: 46px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 15px;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const ArticleDetailsStyled = styled.div`
  & > div:nth-child(1) {
    font-size: 15px;
    font-weight: 500;
  }
  & > div:nth-child(2) {
    font-size: 14px;
    font-weight: 400;
  }

  & > div:nth-child(3) {
    font-size: 14px;
    font-weight: 400;
    & > div {
      margin-right: 12px;
    }
  }
`;

const HeroImgContainerStyled = styled.div`
  width: 100%;
  overflow: hidden;
  & > img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const HeroDetails = (props) => {
  return (
    <>
      <Container>
        <FlexContainer alignment={true}>
          <HeroContentLeftStyled>
            <ContentTopStyled>
              <p>{props.serial ? props.serial.title : props.pageData.tag.title}</p>
              <h2>{props.pageData.title}</h2>
            </ContentTopStyled>
            <FlexContainer justify='left' alignment={true}>
              <AuthorImgContainerStyled>
                <img src={props.pageData.author.avatar.url} />
              </AuthorImgContainerStyled>
              <ArticleDetailsStyled>
                <div>{props.pageData.author?.username || props.serial.author.username}</div>
                <div>principal writer</div>
                <FlexContainer>
                  <div>{moment(props.pageData.createdAt).format("YYYY MMM DD")}</div>
                  <div>•</div>
                  <div>{props.count ? props.count : Math.floor(Math.random() * 100)} বার পড়া হয়েছে</div>
                </FlexContainer>
              </ArticleDetailsStyled>
            </FlexContainer>
          </HeroContentLeftStyled>
          <HeroContentRightStyled>
            <HeroImgContainerStyled>
              <img src={props.pageData.cover?.url || "https://jamstack.org/img/og/default-og-image.png"} />
            </HeroImgContainerStyled>
          </HeroContentRightStyled>
        </FlexContainer>
      </Container>
    </>
  );
};

export default HeroDetails;
