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
            ফুলস্ট্যাক টেকনোলজির বিভিন্ন বিষয়ে টিউটোরিয়াল নিজ মাতৃভাষায়। বাংলায়
            সফটওয়্যার ইঞ্জিনিয়ারিং এর বিভিন্ন বিষয় শিখুন এবং ছড়িয়ে দিন সবার
            মাঝে।
          </ParaStyled>
          <p>Copyright &copy; 2021 ডেভকথন</p>
        </FooterGrid>
        <FooterGrid>
          <FooterGridTitleStyled>কমিউনিটি</FooterGridTitleStyled>
          <ULStyled>
            <LiStyled>
              <a target="_blank" href="https://js.zonayed.me/">
                হাতে কলমে জাভাস্ক্রিপ্ট
              </a>
            </LiStyled>
            <LiStyled>
              <a target="_blank" href="https://devsonket.com/">
                ডেভসংকেত
              </a>
            </LiStyled>
            <LiStyled>
              <a target="_blank" href="https://techdiary.dev/">
                টেকডাইরি
              </a>
            </LiStyled>
          </ULStyled>
        </FooterGrid>
        <FooterGrid>
          <FooterGridTitleStyled>যোগাযোগ</FooterGridTitleStyled>
          <ParaStyled>যেকোন প্রয়োজনে আমাদের কে ই-মেইল করুন</ParaStyled>
          <MailStyled href="mailto:ibrahimkholil550@gmail.com">
            ibrahimkholil550@gmail.com
          </MailStyled>
        </FooterGrid>
      </FlexContainer>
    </Container>
  );
};

export default Footer;
