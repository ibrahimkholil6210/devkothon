import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import StyledLink from "../components/StyledLink";

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  & > input {
    width: 100%;
    border: none;
    outline: none;
    padding: 20px 15px;
    display: block;
    box-sizing: border-box;
    font-weight: 500;
    background: ${(props) => props.theme.bgColors.offColor};
    border-radius: 25px;
    font-size: 18px;
    font-family: inherit;
  }
  & > button {
    background-color: ${(props) => props.theme.bgColors.invert};
    color: ${(props) => props.theme.colors.invert};
    border: none;
    outline: none;
    padding: 5px 10px;
    font-size: 16px;
    float: right;
    height: 100%;
    border-radius: 25px;
    width: 70px;
    margin-top: 10px;
    cursor: pointer;
  }
  & > ul {
    position: relative;
    list-style-type: none;
    padding: 0;
    margin: 25px 0;

    & > li {
      display: block;

      & > a {
        color: #000;
        font-size: 18px;
      }
    }
  }
`;

const Search = (props) => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  let blurTime;
  const handleBlur = () => {
    blurTime = setTimeout(() => {
      setActive(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      clearTimeout(blurTime);
    };
  });

  return (
    <InputContainer>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onFocus={() => setActive(true)}
        onBlur={handleBlur}
        placeholder='আপনি কি খুজছেন?'
      />
      <button onClick={(e) => props.search(false)}>বন্ধ</button>
      {active && (
        <ul>
          <li>
            <StyledLink href='/article/demo'>হার্স্ট বনাম পুলিৎজার: সাংবাদিকতার হলুদ অধ্যায়</StyledLink>
          </li>
        </ul>
      )}
    </InputContainer>
  );
};

export default Search;
