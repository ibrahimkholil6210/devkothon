import styled from "styled-components";
import Container from "./utils/Container";

const ContentContainerStyled = styled.div`
  max-width: 760px;
  margin: 0 auto;
`;

const ContentContainer = ({ details }) => {
  return (
    <Container>
      <ContentContainerStyled>
        <div dangerouslySetInnerHTML={{ __html: details }}></div>
      </ContentContainerStyled>
    </Container>
  );
};

export default ContentContainer;
