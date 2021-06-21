import styled from "styled-components";

const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${(props) => (props.padding ? "15px 0" : "0")};
  align-items: ${(props) => (!props.alignment ? "flex-start" : "center")};
  border-bottom: ${(props) => (props.borderBottom ? "1px solid rgb(242, 242, 247)" : "none")};
  justify-content: ${(props) => (props.justify ? props.justify : "space-between")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  gap: 15px;
`;

const Container = (props) => {
  return (
    <StyledFlexContainer
      padding={props.padding}
      borderBottom={props.borderBottom}
      alignment={props.alignment}
      margin={props.margin}
      justify={props.justify}>
      {props.children}
    </StyledFlexContainer>
  );
};

export default Container;
