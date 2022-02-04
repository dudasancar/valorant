import styled from "styled-components";

export const ContentModal = styled.div`
  background: #fff;
  border-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 1100px;
  height: 700px;
  border: none;
  border-radius: 5px;

  .close-icon {
    display: flex;
    align-self: flex-end;
    cursor: pointer;
    margin: 5px;
  }

  .text {
    display: flex;
    padding: 30px;
    padding-bottom: 0;
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
