import { Modal } from "@material-ui/core";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ContentModal } from "./styles";
import jett from "../../assets/jett-modal.png";

interface IProps {
  closeModal: () => void;
  open: boolean;
}

const AgentsModal = ({ closeModal, open }: IProps): React.ReactElement => {
  return (
    <>
      <Modal
        open={open}
        onClose={closeModal}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
        }}
      >
        <ContentModal>
          <CloseIcon className="close-icon" onClick={closeModal} />
          <div className="text">
            <h4>Função</h4>
            <h1>Duelista</h1>
            <p>
              Representando a Coreia do Sul, sua terra natal, Jett tem um estilo
              de luta ágil e evasivo que permite que ela assuma riscos como
              ninguém. Ela corre em meio a qualquer confronto, cortando os
              inimigos antes mesmo que eles percebam quem ou o que os atingiu.
            </p>
            <h4>Habilidades</h4>
          </div>
          <div className="img">
            <img src={jett} />
          </div>
        </ContentModal>
      </Modal>
    </>
  );
};

export default AgentsModal;
