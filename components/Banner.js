import styled from "styled-components";
import Container from "./utils/Container";
import FlexContainer from "./utils/FlexContainer";

const StyldeBannerContainer = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: center;
  flex: 1;
  flex-wrap: wrap;
`;

const StylderHeader = styled.div`
  font-size: 65px;
  font-weight: 800;
  text-transform: uppercase;
  text-align: justify;
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
        <StyldeBannerContainer>
          <StylderHeader>'প্রাচ্যবাদ' একটি বড় ডিসিপ্লিন</StylderHeader>
          <p>
            'প্রাচ্যবাদ' একটি বড় ডিসিপ্লিন। এই ডিসিপ্লিনের অধীনে প্রাচ্যের অধীবাসিদের আমাদের বিশ্বাস, ইতিহাস, সমাজ, সাহিত্য, সভ্যতা মূল্যবোধের
            সমালোচনা-পর্যালোচনা করা হচ্ছে গত ১০০০ বছর। কিন্তু পাশ্চাত্যের চিন্তা, দর্শন, ইতিহাসকে সেভাবে পর্যালোচনা করা হয়নি। ফলে একপেশে প্রচারণায়
            সেগুলোকে মানবিক বিকাশের সর্বচ্চো স্তর বলে অনেকেই মনে করেন। কিন্তু আমরা মনে করি সঠিক সিদ্ধান্তে উপনীত হবার পূর্বে পাশ্চাত্যে সভ্যতা ও
            দর্শনের পূর্ন ও যথার্থ পর্যালোচনা হওয়া উচিৎ।
          </p>
        </StyldeBannerContainer>
      </FlexContainer>
    </Container>
  );
};

export default Banner;
