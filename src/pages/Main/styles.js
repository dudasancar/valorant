import styled from "styled-components";
import mapsBackground from "../../assets/background-maps.png";

export const Container = styled.div`
  width: 100%;
  margin: 0;
  .titleDiv {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    bottom: 0px;
    left: 30%;

    img.title {
      width: 700px;
      height: 130px;
    }
  }

  .background {
    position: relative;
    background: #0d161f;
    overflow: hidden;

    &::before {
      content: "";
      // display: block;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
      background-image: url(${mapsBackground});
      background-repeat: no-repeat;
      background-position: center bottom;
      background-size: cover;
    }
  }
`;
