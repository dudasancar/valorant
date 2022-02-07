import styled from "styled-components";
import mapsBackground from "../../assets/background-maps.png";

export const Container = styled.div`
  position: relative;
  background: #0d161f;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4000px;
    z-index: 1;
    background-image: url(${mapsBackground});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;

  .title {
    display: flex;

    h1 {
      color: #fff;
      text-transform: uppercase;
      font-style: italic;
      font-size: 40px;
      margin-left: 70px;
      padding-left: 40px;
      padding-top: 40px;
    }

    img {
      margin: 30px;
      padding-top: 20px;
    }
  }

  .MuiTabs-scroller {
    border: 1px solid #fff;
    img {
      max-width: 325px;
      height: 121px;
      padding: 60px;
    }
  }

  .MuiSvgIcon-root {
    width: 80px;
    height: 80px;
    fill: #e13157;
  }

  span {
    display: none;
  }
`;
