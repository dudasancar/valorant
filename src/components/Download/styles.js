import styled from "styled-components";
import mapsBackground from "../../assets/background-maps.png";

export const Container = styled.div`
  position: relative;
  background: #0d161f;
  overflow: hidden;

  &::before {
    content: "";
    // display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 2400px;
    width: 100vw;
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
    padding-top: 40px;
  }

  .MuiSvgIcon-root {
    width: 30px;
    height: 30px;
    fill: #e13157;
    margin-top: 25px;
  }

  .flex-container {
    display: flex;
    justify-content: space-evenly;
    padding: 30px;

    .all-text {
      margin-top: 80px;
    }

    .text {
      display: flex;

      p {
        color: #fff;
        font-size: 24px;
        margin-left: 20px;
      }
    }

    button {
      width: 183px;
      margin-top: 20px;
      img {
        margin-right: 10px;
      }
    }
  }
`;
