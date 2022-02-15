import styled from "styled-components";
import background from "../../assets/background-agents.png";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${background}) no-repeat center center;
  background-size: cover;
`;

export const Content = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-around;
  border-bottom: 3px solid #ffffff45;

  div {
    display: flex;
    p {
      color: #fff;
      text-transform: uppercase;
      margin: 15px;
      cursor: pointer;
    }
  }

  button {
    width: 140px;
    height: 45px;
  }
`;
