import styled from "styled-components";

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

  .divider {
    display: flex;
    justify-content: flex-end;
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
