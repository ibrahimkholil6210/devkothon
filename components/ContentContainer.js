import styled from "styled-components";
import Container from "./utils/Container";
import FlexContainer from "./utils/FlexContainer";
import SuggestionList from "./SuggestionList";

const ContentWrapperStyled = styled.div`
  flex: 1;
  & > p {
    margin: 0 0 10px 0;
  }

  & > blockquote {
    margin: 2rem 0;
    padding: 2rem;
    background: #edf2ff;
    font-weight: 400;
    border-radius: 0.3rem;
    border-left: 3px solid #5183f5;
  }

  & > :is(h1, h2, h3, h4, h5, h6) {
    border-bottom: 2px solid #f1f4f8;
  }
`;

const SuggestationListWrapperStyled = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    display: none;
  }
`;

const ContentContainer = ({ details, serial, id, articles }) => {
  return (
    <Container>
      <FlexContainer margin='20px 0'>
        <ContentWrapperStyled dangerouslySetInnerHTML={{ __html: details }}></ContentWrapperStyled>
        <SuggestationListWrapperStyled>
          <SuggestionList serial={serial} id={id} articles={articles} />
        </SuggestationListWrapperStyled>
      </FlexContainer>
    </Container>
  );
};

export default ContentContainer;
