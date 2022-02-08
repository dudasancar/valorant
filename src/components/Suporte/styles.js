import styled from "styled-components";
import mapsBackground from "../../assets/background-maps.png";

export const Container = styled.div`
  position: relative;
  background: #0d161f;
  overflow: hidden;
  padding: 40px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4000px;
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
  display: flex;
  justify-content: center;

  .MuiPaper-root {
    width: 1158px;
    height: 685px;

    h1 {
      color: #04254c;
      text-transform: uppercase;
      font-style: italic;
      font-size: 40px;
      margin-left: 70px;
    }
  }

  .table {
    display: grid;
    width: 100%;

    // .MuiTextField-root,
    // .MuiFormControl-root {
    //   width: 350px;
    //   margin-left: 20px;
    // }

    .name {
      grid-area: name;
      width: 350px;
      margin-left: 20px;
    }

    .lastname {
      grid-area: lastname;
    }

    .email {
      grid-area: email;
      width: 350px;
      margin-left: 20px;
    }

    .nickname {
      grid-area: nickname;
    }

    .subject {
      grid-area: subject;
      margin-left: 20px;
    }

    .description {
      grid-area: description;
      margin-left: 20px;
    }

    .img {
      grid-area: img;
    }

    grid-template-columns: repeat(3, 1fr);

    grid-template-areas:
      "name lastname img"
      "email nickname img"
      "subject subject img"
      "description description img";

    .img {
      width: 300px;
      height: 360px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      grid-area: img;
      margin-left: 30px;

      img {
        width: 315px;
        height: 315px;
        margin: 0;
        margin-right: 50px;
        border: none;
        position: absolute;
      }
    }
  }
`;
