import React, { useState } from "react";
import styled from "styled-components";
import { FiHome, FiPenTool, FiSearch } from "react-icons/fi";
import Container from "./utils/Container";
import FelxContainer from "./utils/FlexContainer";
import Logo from "./Logo";
import Search from "./Search";
import StyledLink from "../components/StyledLink";

const StyledNavLinks = styled.div`
  flex: 1;
`;

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  @media screen and (min-width: 769px) and (max-width: 992px) {
    justify-content: center;
  }
`;

const StyleList = styled.li`
  font-size: ${(props) => props.theme.linkSize.lg.fSize};
  font-weight: ${(props) => props.theme.linkSize.lg.fWeight};
  padding-left: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 5px;
  }

  & > a {
    font-size: inherit;
    font-weight: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.primary};
  }

  & > a > svg {
    margin-right: 5px;
  }

  &:nth-child(3):hover {
    color: ${(props) => props.theme.colors.offColor};
  }

  &:nth-child(3):focus {
    color: ${(props) => props.theme.colors.offColor};
    outline: none;
    border: 0;
  }
`;

const Nav = (props) => {
  const [searchToggle, setSearchToggle] = useState(false);
  return (
    <Container>
      <FelxContainer padding borderBottom alignment>
        {searchToggle ? (
          <Search search={setSearchToggle} />
        ) : (
          <>
            <Logo />
            <StyledNavLinks>
              <StyledUl>
                <StyleList>
                  <StyledLink href='/'>
                    <FiHome />
                    মূলপাতা
                  </StyledLink>
                </StyleList>
                <StyleList>
                  <StyledLink href='/article'>
                    <FiPenTool />
                    আর্টিকেলস
                  </StyledLink>
                </StyleList>
                <StyleList>
                  <StyledLink href='/series'>
                    <FiPenTool />
                    সিরিজ
                  </StyledLink>
                </StyleList>
                <StyleList onClick={(e) => setSearchToggle(true)}>
                  <FiSearch />
                  সার্চ
                </StyleList>
              </StyledUl>
            </StyledNavLinks>
          </>
        )}
      </FelxContainer>
    </Container>
  );
};

export default Nav;
