import styled from "styled-components";

export const ContentModal = styled.div`
  background: #fff;
  border-color: #fff;
  width: 1100px;
  height: 700px;
  border: none;
  border-radius: 5px;
  display: flex;

  .close-icon {
    cursor: pointer;
  }

  .text {
    padding: 50px;
  }

  .img {
    padding: 50px;
  }

  h4 {
    color: #e13157;
    text-transform: uppercase;
    font-style: bold;
    font-size: 24px;
    margin: 0;
  }

  h1 {
    color: #133052;
    font-size: 54px;
    margin: 0;
  }

  p {
    width: 100%;
    font-size: 20px;
    color: #133052;
    letter-spacing: 0px;
  }
`;
