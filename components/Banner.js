import styled from "styled-components";
import Container from "./utils/Container";
import FlexContainer from "./utils/FlexContainer";
import EditorLayout from "./EditorLayout";

const StyledBannerWrapper = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyldeBannerLeftContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    width: 100%;
  }
`;

const StyldeBanneRightContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  perspective: 500px;

  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    display: none;
  }
`;

const StylderHeader = styled.div`
  font-size: 38px;
  font-weight: ${(props) => props.theme.linkSize.lg.fWeight};
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    font-weight: 700;
  }

  @media screen and (max-width: 467px) {
    font-size: 24px;
  }

  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 45px;
    font-weight: 700;
  }
`;

const Banner = () => {
  return (
    <Container>
      <StyledBannerWrapper>
        <FlexContainer alignment>
          <StyldeBannerLeftContainer>
            <StylderHeader>বাংলায় ফুলস্ট্যাক টেকনোলজি</StylderHeader>
            <p>
              ফুলস্ট্যাক টেকনোলজির বিভিন্ন বিষয়ে টিউটোরিয়াল নিজ মাতৃভাষায়।
              বাংলায় সফটওয়্যার ইঞ্জিনিয়ারিং এর বিভিন্ন বিষয় শিখুন এবং ছড়িয়ে দিন
              সবার মাঝে।
            </p>
          </StyldeBannerLeftContainer>
          <StyldeBanneRightContainer>
            <EditorLayout />
          </StyldeBanneRightContainer>
        </FlexContainer>
      </StyledBannerWrapper>
    </Container>
  );
};

export default Banner;
