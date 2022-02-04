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

  h1 {
    color: #fff;
    text-transform: uppercase;
    font-style: italic;
    font-size: 40px;
    margin-left: 70px;
    padding-left: 40px;
  }

  hr {
    background-color: #e13157;
    margin-top: 30px;
    width: 55%;
  }

  .MuiTabs-flexContainer {
    margin-left: 50px;
    img {
      width: 500px;
      height: 500px;
      padding: 15px;
      border-radius: 5%;
    }
  }

  .PrivateTabIndicator-colorSecondary-3 {
    display: none;
  }

  span {
    display: none;
  }

  p {
    color: #e13157;
    font-size: 24px;
    text-align: end;
    margin-right: 40px;
  }
`;
