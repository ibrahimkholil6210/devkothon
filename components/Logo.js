import styled from "styled-components";
import Link from "next/link";

const StyledNavBrandText = styled.div`
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }

  @media screen and (min-width: 769px) and (max-width: 992px) {
    width: 100%;
    text-align: center;
  }
`;
const StyledLink = styled.a`
  text-decoration: none;
  font-size: 30px;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-weight: 400;
`;
const StyledSpanBrand = styled.span`
  font-weight: 900;
`;
const Logo = (props) => {
  return (
    <StyledNavBrandText>
      <Link href='/'>
        <StyledLink>
          <StyledSpanBrand>ডেভ</StyledSpanBrand>
          কথন
        </StyledLink>
      </Link>
    </StyledNavBrandText>
  );
};
export default Logo;
