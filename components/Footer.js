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

const ParaStyled = styled.p``;

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
  font-size: ${({ theme }) => theme.linkSize.lg.fSize};
  font-weight: ${({ theme }) => theme.linkSize.lg.fWeight};
  text-transform: lowercase;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

const LiStyled = styled.li`
  position: relative;
  & > a {
    text-decoration: none;
    font-size: ${({ theme }) => theme.linkSize.lg.fSize};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Footer = (props) => {
  return (
    <Container>
      <FlexContainer padding alignment={false}>
        <FooterGrid>
          <Logo />
          <ParaStyled>
            ডেভকথন একটি কম্পিউটার সাইন্সের তথ্য কোষ। কম্পিউটার সাইন্স একটি বিশাল ডিসিপ্লিন। আমাদের চেষ্টা থাকবে বিষয় ভিত্তিক টিউটোরিয়াল এবং প্রতিদিনের
            যত কাজের যত ভাল খারাপ অভিজ্ঞতা সবার মাঝে ছড়িয়ে দেয়া।
          </ParaStyled>
          <p>Copyright &copy; 2021 ডেভকথন</p>
        </FooterGrid>
        <FooterGrid>
          <FooterGridTitleStyled>কমিউনিটি</FooterGridTitleStyled>
          <ULStyled>
            <LiStyled>
              <a target='_blank' href='https://js.zonayed.me/'>
                হাতে কলমে জাভাস্ক্রিপ্ট
              </a>
            </LiStyled>
            <LiStyled>
              <a target='_blank' href='https://devsonket.com/'>
                ডেভসংকেত
              </a>
            </LiStyled>
            <LiStyled>
              <a target='_blank' href='https://techdiary.dev/'>
                টেকডাইরি
              </a>
            </LiStyled>
          </ULStyled>
        </FooterGrid>
        <FooterGrid>
          <FooterGridTitleStyled>যোগাযোগ</FooterGridTitleStyled>
          <ParaStyled>যেকোন প্রয়োজনে আমাদের কে ই-মেইল করুন বা স্পন্সরশীপের জন্য যোগাযোগ করুন</ParaStyled>
          <MailStyled href='mailto:contact@devkothon.com'>contact@devkothon.com</MailStyled>
        </FooterGrid>
      </FlexContainer>
    </Container>
  );
};

export default Footer;
