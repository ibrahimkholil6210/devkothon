import Link from "next/link";
import styled from "styled-components";

const StyledLink = ({ children, className, href }) => (
  <Link href={href} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export default styled(StyledLink)`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.offColor};
  }

  &:focus {
    color: ${(props) => props.theme.colors.offColor};
    outline: none;
    border: 0;
  }
`;
