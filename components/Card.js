import styled from "styled-components";
import Link from "next/link";

const CardStyled = styled.div`
  width: 24%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    width: 48%;
  }
`;

const LinkStyled = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const CardImgStyled = styled.div`
  width: 100%;
  border-radius: 5px;
  height: 160px;
  overflow: hidden;
`;

const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
`;

const CardDescStyled = styled.div`
  margin-top: 15px;
`;

const CardPreData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
  }
  & > div:nth-child(2) {
    cursor: pointer;
  }
`;

const TitleStyled = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const CardBottomStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    font-size: 15px;
  }
`;

const Card = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <CardStyled>
      <Link href={"/article/" + props.item.slug}>
        <LinkStyled>
          <CardImgStyled>
            <ImgStyled src={props.item.mainImg} alt={props.item.mainImg} />
          </CardImgStyled>
          <CardDescStyled>
            <CardPreData>
              <div>{props.item.category}</div>
              <div onClick={handleClick}>
                <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE1IDE4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNLjUgMTMuN2w3IDMuNzMzIDctMy43MzNWM0EyLjUgMi41IDAgMCAwIDEyIC41SDNBMi41IDIuNSAwIDAgMCAuNSAzdjEwLjd6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNi45IDEyLjFWOC42OTVIMy41VjcuNTAxaDMuNHYtMy40aDEuMTk1djMuNEgxMS41djEuMTk0SDguMDk1VjEyLjF6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=' />
              </div>
            </CardPreData>
            <TitleStyled>{props.item.title}</TitleStyled>
          </CardDescStyled>
          <CardBottomStyled>
            <div>{props.item.date}</div>
            <div>•</div>
            <div>1722 বার পড়া হয়েছে</div>
          </CardBottomStyled>
        </LinkStyled>
      </Link>
    </CardStyled>
  );
};

export default Card;
