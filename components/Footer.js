import styled from "styled-components";
import Container from "./utils/Container";
import FlexContainer from "./utils/FlexContainer";
import Logo from "./Logo";

const FooterGrid = styled.div`
  width: 32%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    width: 48%;
  }
`;

const ParaStyled = styled.p`
  font-size: 16px;
`;

const FooterGridTitleStyled = styled.div`
  font-size: 30px;
  font-weight: 900;
`;

const ULStyled = styled.ul`
  list-style-type: disc;
  padding: 0;
  margin-left: 20px;
`;

const MailStyled = styled.a`
  font-size: 16px;
  font-weight: 600;
  text-transform: lowercase;
  cursor: pointer;
  color: #000;
  text-decoration: none;
`;

const LiStyled = styled.li`
  position: relative;
  & > a {
    text-decoration: none;
    color: #000;
  }
`;

const Footer = (props) => {
  return (
    <Container>
      <FlexContainer padding alignment={false}>
        <FooterGrid>
          <Logo />
          <ParaStyled>
            'প্রাচ্যবাদ' একটি বড় ডিসিপ্লিন। এই ডিসিপ্লিনের অধীনে প্রাচ্যের অধীবাসিদের আমাদের বিশ্বাস, ইতিহাস, সমাজ, সাহিত্য, সভ্যতা মূল্যবোধের
            সমালোচনা-পর্যালোচনা করা হচ্ছে গত ১০০০ বছর। কিন্তু পাশ্চাত্যের চিন্তা, দর্শন, ইতিহাসকে সেভাবে পর্যালোচনা করা হয়নি। ফলে একপেশে প্রচারণায়
            সেগুলোকে মানবিক বিকাশের সর্বচ্চো স্তর বলে অনেকেই মনে করেন। কিন্তু আমরা মনে করি সঠিক সিদ্ধান্তে উপনীত হবার পূর্বে পাশ্চাত্যে সভ্যতা ও
            দর্শনের পূর্ন ও যথার্থ পর্যালোচনা হওয়া উচিৎ।
          </ParaStyled>
          <p>Copyright &copy; 2021 পাশ্চাত্যবাদ</p>
        </FooterGrid>
        <FooterGrid>
          <FooterGridTitleStyled>কমিউনিটি</FooterGridTitleStyled>
          <ULStyled>
            <LiStyled>
              <a target='_blank' href='https://www.alkawsar.com/bn/'>
                আলকাউসার
              </a>
            </LiStyled>
            <LiStyled>
              <a target='_blank' href='http://assunnahtrust.com/'>
                আসসুন্নাহ ট্রাস্ট
              </a>
            </LiStyled>
            <LiStyled>
              <a target='_blank' href='https://ahlehaqmedia.com/'>
                আহলে হক বাংলা মিডিয়া
              </a>
            </LiStyled>
          </ULStyled>
        </FooterGrid>
        <FooterGrid>
          <FooterGridTitleStyled>যোগাযোগ</FooterGridTitleStyled>
          <ParaStyled>যেকোন প্রয়োজনে আমাদের কে ই-মেইল করুন বা স্পন্সরশীপের জন্য যোগাযোগ করুন</ParaStyled>
          <MailStyled href='mailto:contact@occidentalism.com'>contact@OCCIDENTALISM.com</MailStyled>
        </FooterGrid>
      </FlexContainer>
    </Container>
  );
};

export default Footer;
