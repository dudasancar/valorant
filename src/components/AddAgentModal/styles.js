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

  form {
    .table {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      justify-content: space-around;

      .MuiTextField-root,
      .MuiFormControl-root {
        width: 350px;
        margin: 0 0 5px 20px;
      }

      .MuiGrid-spacing-xs-2 {
        width: calc(100% + 170px);
      }

      div + div {
        width: calc(100% - 350px);
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
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 25px;
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
