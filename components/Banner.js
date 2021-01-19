import styled from "styled-components";
import Container from "./utils/Container";
import FlexContainer from "./utils/FlexContainer";
import EditorLayout from "./EditorLayout";

const StyldeBannerLeftContainer = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: center;
  width: 30%;
  flex-wrap: wrap;
`;

const StyldeBanneRightContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const StylderHeader = styled.div`
  font-size: 38px;
  font-weight: ${(props) => props.theme.linkSize.lg.fWeight};
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    font-weight: 700;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 45px;
    font-weight: 700;
  }
`;

const Banner = (props) => {
  return (
    <Container>
      <FlexContainer>
        <StyldeBannerLeftContainer>
          <StylderHeader>বাংলা কম্পিউটার সাইন্স তথ্য কোষ</StylderHeader>
          <p>
            ডেভকথন একটি কম্পিউটার সাইন্সের তথ্য কোষ। কম্পিউটার সাইন্স একটি বিশাল ডিসিপ্লিন। আমাদের চেষ্টা থাকবে বিষয় ভিত্তিক টিউটোরিয়াল এবং প্রতিদিনের
            যত কাজের যত ভাল খারাপ অভিজ্ঞতা সবার মাঝে ছড়িয়ে।
          </p>
        </StyldeBannerLeftContainer>
        <StyldeBanneRightContainer>
          <EditorLayout />
        </StyldeBanneRightContainer>
      </FlexContainer>
    </Container>
  );
};

export default Banner;
