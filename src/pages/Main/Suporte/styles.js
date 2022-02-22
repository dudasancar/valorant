import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 30px;

  .MuiPaper-root {
    width: 1158px;
    height: 680px;

    h1 {
      color: #04254c;
      text-transform: uppercase;
      font-style: italic;
      font-size: 40px;
      margin-left: 50px;
      padding-top: 30px;
    }
  }

  .table {
    display: grid;
    width: 100%;
    padding: 30px;

    .MuiTextField-root {
      margin: 5px;
    }

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

    .btn {
      grid-area: btn;
      display: flex;
      justify-content: flex-end;
      margin: 30px 5px 0 0;
    }

    grid-template-columns: repeat(3, 1fr);

    grid-template-areas:
      "name lastname img"
      "email nickname img"
      "subject subject img"
      "description description img"
      "null btn img";

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

  .btn {
    button {
      width: 143px;
      height: 53px;
      text-transform: capitalize;
      font-size: 18px;
    }
  }
`;
