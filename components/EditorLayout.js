import styled from "styled-components";
import { FiFile, FiSearch, FiChevronRight, FiFolder, FiGitPullRequest, FiGitMerge, FiFileText, FiX } from "react-icons/fi";

const StyledEditorWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  margin-top: 15px;
  flex-wrap: wrap;
`;

const StyledEditorTop = styled.div`
  height: 40px;
  background-color: ${(props) => props.theme.editorColor.bgTop};
  width: 100%;
  border-radius: 5px 5px 0 0;
  display: flex;
  align-items: center;
  padding: 0 5px;
`;

const StyledAppleBtn = styled.div`
  display: flex;

  & > div:nth-child(1) {
    background-color: #fc6058;
  }

  & > div:nth-child(2) {
    background-color: #fec02f;
  }

  & > div:nth-child(3) {
    background-color: #2aca3e;
  }
`;

const StyledDot = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin: 5px;
`;

const StyledEditorTitle = styled.div`
  flex: 1;
  color: ${(props) => props.theme.editorColor.fColor};
  text-align: center;
`;

const StyledEditorMenu = styled.div`
  height: 30px;
  background-color: ${(props) => props.theme.editorColor.bgOff};
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledEditorMenuUL = styled.ul`
  list-style-type: none;
  padding: 0 0 0 5px;
  margin: 0;
  display: flex;
  justify-content: flex-start;
`;

const StyledList = styled.li`
  color: ${(props) => props.theme.editorColor.fColor};
  font-size: 13px;
  margin-right: 8px;
  cursor: pointer;
  font-weight: 400;
`;

const StyledEditorMainWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 250px;
`;

const StyledWrapperLeftExplorer = styled.div`
  width: 6%;
  background-color: ${(props) => props.theme.editorColor.bgOff};
  height: 100%;
`;

const StyledExplorerLeftUL = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledExplorerLeftLI = styled.li`
  display: block;
  font-size: 20px;
  color: ${(props) => props.theme.editorColor.fColor};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  &:nth-child(1) {
    border-left: 4px solid ${(props) => props.theme.editorColor.fColor};
  }
`;

const StyledFileExplorer = styled.div`
  width: 24%;
  background-color: ${(props) => props.theme.editorColor.bgOff};
  height: 100%;
  border-left: 2px solid ${(props) => props.theme.editorColor.borderColor};
`;

const StyledExplorerBadge = styled.h3`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 10px;
  color: ${(props) => props.theme.editorColor.fColor};
  padding: 0;
  margin: 5px 0 0 5px;
`;

const StyledEditorProjectName = styled.div`
  background-color: ${(props) => props.theme.editorColor.bgTop};
  color: ${(props) => props.theme.editorColor.fColor};
  display: flex;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
`;

const StyledFileNameUL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 0 0 5px;
`;

const StyledFileList = styled.li`
  color: ${(props) => props.theme.editorColor.fColor};
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;

  & > svg {
    margin-right: 5px;
  }
`;

const StyledEditorText = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.editorColor.codeArea};
  border-left: 1px solid ${(props) => props.theme.editorColor.borderColor};
`;

const StyledEditorFileName = styled.div`
  color: ${(props) => props.theme.editorColor.fColor};
  background-color: ${(props) => props.theme.editorColor.fileNamebg};
  font-size: 13px;
  padding-left: 5px;

  & > span {
    background-color: ${(props) => props.theme.editorColor.codeArea};
    padding: 0 5px;
    display: flex;
    align-items: center;
    width: 15%;
    justify-content: center;
    cursor: pointer;

    & > svg {
      margin-left: 5px;
    }
  }
`;

const StyledEditorSpace = styled.div`
  font-size: 14px;
  padding: 0 5px;
  color: ${(props) => props.theme.editorColor.fColor};

  & > span:nth-child(1) {
    color: #e5c07b;
  }

  & > span:nth-child(2) {
    color: #56b6c2;
  }

  & > span:nth-child(3) {
    color: #ce9178;
  }
`;

const StyledIcon = styled.span`
  background-image: url(${(props) => props.url});
  background-size: 16px;
  background-position: 0px center;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: top;
  flex-shrink: 0;
  margin-right: 3px;
`;

const EditorLayout = (props) => {
  return (
    <>
      <StyledEditorWrapper>
        <StyledEditorTop>
          <StyledAppleBtn>
            <StyledDot></StyledDot>
            <StyledDot></StyledDot>
            <StyledDot></StyledDot>
          </StyledAppleBtn>
          <StyledEditorTitle>Visual Studio Code</StyledEditorTitle>
        </StyledEditorTop>
        <StyledEditorMenu>
          <StyledEditorMenuUL>
            <StyledList>File</StyledList>
            <StyledList>Edit</StyledList>
            <StyledList>Selection</StyledList>
            <StyledList>View</StyledList>
            <StyledList>Go</StyledList>
            <StyledList>Run</StyledList>
            <StyledList>Terminal</StyledList>
            <StyledList>Help</StyledList>
          </StyledEditorMenuUL>
        </StyledEditorMenu>
        <StyledEditorMainWrapper>
          <StyledWrapperLeftExplorer>
            <StyledExplorerLeftUL>
              <StyledExplorerLeftLI>
                <FiFile />
              </StyledExplorerLeftLI>
              <StyledExplorerLeftLI>
                <FiSearch />
              </StyledExplorerLeftLI>
              <StyledExplorerLeftLI>
                <FiGitMerge />
              </StyledExplorerLeftLI>
            </StyledExplorerLeftUL>
          </StyledWrapperLeftExplorer>
          <StyledFileExplorer>
            <StyledExplorerBadge>Explorer</StyledExplorerBadge>
            <StyledEditorProjectName>
              <FiChevronRight />
              CREATE-NEXT-APP
            </StyledEditorProjectName>
            <StyledFileNameUL>
              <StyledFileList>
                <FiFolder />
                pages
              </StyledFileList>
              <StyledFileList>
                <FiFolder />
                node_modules
              </StyledFileList>
              <StyledFileList>
                <FiFolder />
                components
              </StyledFileList>
              <StyledFileList>
                <FiGitPullRequest />
                .gitignore
              </StyledFileList>
              <StyledFileList>
                <StyledIcon url='https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/npm.svg' />
                package.json
              </StyledFileList>
              <StyledFileList>
                <StyledIcon url='https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/npm.svg' />
                package-lock.json
              </StyledFileList>
              <StyledFileList>
                <StyledIcon url='https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/readme.svg' />
                README.md
              </StyledFileList>
            </StyledFileNameUL>
          </StyledFileExplorer>
          <StyledEditorText>
            <StyledEditorFileName>
              <span>
                index.js <FiX />
              </span>
            </StyledEditorFileName>
            <StyledEditorSpace>
              <span>console</span>.<span>log</span>(<span>"Hello World"</span>)
            </StyledEditorSpace>
          </StyledEditorText>
        </StyledEditorMainWrapper>
      </StyledEditorWrapper>
    </>
  );
};

export default EditorLayout;
