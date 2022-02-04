import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background: #0d161f;
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-around;
  border-bottom: 3px solid #ffffff45;
  position: relative;
  z-index: 2;
  width: 100%;

  div {
    display: flex;
    p {
      color: #fff;
      text-transform: uppercase;
      margin: 15px;
    }
  }

  button {
    width: 140px;
    height: 45px;
  }
`;
