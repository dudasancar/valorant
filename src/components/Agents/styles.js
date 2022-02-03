import styled from "styled-components";
import imageAgents from "../../assets/image-agents.png";

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
    width: 100%;
    z-index: 1;
    opacity: 0.05;
    background-image: url(${imageAgents});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }
`;

export const Content = styled.div`
  margin: 0 40px 0 40px;
  position: relative;
  z-index: 2;

  .agents {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;

    img {
      width: 250px;
      height: 300px;
      margin-top: 30px;
      border: 1px solid #133052;
      background: linear-gradient(
        180deg,
        #26262600 0%,
        #1a1a1abf 50%,
        #090909 100%
      );

      &:hover {
        background: linear-gradient(
          180deg,
          #26262600 0%,
          #1a1a1abf 50%,
          #e13157 100%
        );
        border: 1px solid #e13157;
      }
    }

    div {
      width: 250px;
      height: 300px;
      margin-top: 30px;
      border: 1px solid #e13157;
      display: flex;
      justify-content: center;
      align-items: center;

      .see-all {
        width: 25px;
        height: 25px;
        margin: 0;
        border: none;
      }

      p {
        color: #e13157;
        font-size: 24px;
        margin-left: 15px;
      }
    }
  }

  h1 {
    color: #fff;
    text-transform: uppercase;
    font-style: italic;
    font-size: 40px;
    margin-left: 70px;
  }
`;
