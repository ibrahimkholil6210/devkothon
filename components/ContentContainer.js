import styled from "styled-components";
import Container from "./utils/Container";
import FlexContainer from "./utils/FlexContainer";
import SuggestionList from "./SuggestionList";

const ContentWrapperStyled = styled.div`
  flex: 1;
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
