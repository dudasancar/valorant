import styled from "styled-components";

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
      min-width: 250px;
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

  .flex-container {
    display: flex;
    justify-content: space-around;
    padding: 30px;

    h2 {
      color: #fff;
      margin: 30px 0 10px 40px;
    }
  }
`;
