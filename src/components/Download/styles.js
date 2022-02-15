import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 30px;

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
