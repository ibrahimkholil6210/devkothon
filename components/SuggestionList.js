import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "./StyledLink";

const SuggestionListWrapper = styled.div`
  margin-left: 10px;
`;

const SuggestionTitle = styled.h2`
  margin: 0;
`;

const SuggestionListStyle = styled.ul`
  list-style: none;
  padding: 0;
`;

const SuggestionSingleListStyled = styled.li`
  font-weight: ${(props) => (props.marksAsCurrent ? "bold" : "normal")};
  font-size: ${(props) => props.theme.linkSize.lg.fSize};
`;

const SuggestionList = ({ serial, id, articles }) => {
  const router = useRouter();
  return (
    <SuggestionListWrapper>
      <SuggestionTitle>{!articles ? serial?.title + " সিরিজের আরো পোস্ট সূমহ" : "আরো আর্টিকেল সূমহ"}</SuggestionTitle>
      <SuggestionListStyle>
        {!articles
          ? serial?.posts?.map((post) => {
              return (
                <SuggestionSingleListStyled key={post.id} marksAsCurrent={id === post.id}>
                  <StyledLink href={post.id}>{post.title}</StyledLink>
                </SuggestionSingleListStyled>
              );
            })
          : articles?.map((article) => {
              return (
                <SuggestionSingleListStyled key={article.id} marksAsCurrent={router.query.id === article.id}>
                  <StyledLink href={article.id}>{article.title}</StyledLink>
                </SuggestionSingleListStyled>
              );
            })}
      </SuggestionListStyle>
    </SuggestionListWrapper>
  );
};

export default SuggestionList;
