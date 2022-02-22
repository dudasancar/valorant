import styled from "styled-components";

export const ContentModal = styled.div`
  background: #fff;
  border-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 1150px;
  height: 700px;
  border: none;
  padding: 5px;

  .close-icon {
    display: flex;
    align-self: flex-end;
    cursor: pointer;
    margin: 0;
  }

  h1 {
    color: #133052;
    font-size: 54px;
    padding: 20px;
  }

  p {
    width: 100%;
    font-size: 20px;
    color: #133052;
    letter-spacing: 0px;
  }

  .table {
    display: grid;
    width: 100%;

    .MuiTextField-root,
    .MuiFormControl-root {
      width: 350px;
      margin-left: 20px;
    }

    .function {
      grid-area: function;
    }

    .field2 {
      grid-area: field2;
    }

    .field3 {
      grid-area: field3;
    }

    .field4 {
      grid-area: field4;
    }

    .field5 {
      grid-area: field5;
    }

    .field6 {
      grid-area: field6;
    }

    .field7 {
      grid-area: field7;
    }

    .field8 {
      grid-area: field8;
    }

    .field9 {
      grid-area: field9;
    }

    .field10 {
      grid-area: field10;
    }

    .add {
      grid-area: add;
    }

    grid-template-columns: repeat(3, 1fr);

    grid-template-areas:
      "function field2 add"
      "field3 field4 add"
      "field5 field6 add"
      "field7 field8 add"
      "field9 field10 add";

    .add {
      width: 300px;
      height: 360px;
      border: 1px solid #e13157;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      grid-area: add;
      margin-left: 30px;
      background-size: cover;
      background-position: center center;

      input {
        display: none;
      }

      .MuiSvgIcon-root,
      span {
        width: 25px;
        height: 25px;
        margin: 0;
        border: none;
        color: #e13157;
        margin-right: 40px;
        padding-top: 10px;
        position: absolute;
      }

      label {
        color: #e13157;
        font-size: 24px;
        margin-left: 15px;
        display: flex;
        justify-content: center;
      }
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    min-width: 140px;
    height: 50px;
    margin-top: 40px;
  }

  .btnSave {
    margin-right: 40px;
  }

  .btnCancel {
    margin-right: 20px;
  }
`;
