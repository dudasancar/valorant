import { Modal } from "@material-ui/core";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ContentModal } from "./styles";
import jett from "../../assets/jett-modal.png";

interface IProps {
  closeModal: () => void;
  open: boolean;
  agent: any | null;
}

const AgentsModal = ({
  closeModal,
  open,
  agent,
}: IProps): React.ReactElement => {
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
            <div>
              <h4>Função</h4>
              <h1>{agent?.function}</h1>
              <p>{agent?.description}</p>
              <h4>Habilidades</h4>
              <div className="abilities">
                <div>
                  <p>Arma branca</p>
                  <p>{agent?.skills[0].damage} Dano</p>
                </div>
                <div>
                  <p>Arma primária</p>
                  <p>{agent?.skills[1].damage} Dano</p>
                </div>
                <div>
                  <p>Arma secundária</p>
                  <p>{agent?.skills[2].damage} Dano</p>
                </div>
                <div>
                  <p>Especial</p>
                  <p>{agent?.skills[3].damage} Dano</p>
                </div>
              </div>
            </div>
            <div>
              <img src={jett} />
            </div>
          </div>
        </ContentModal>
      </Modal>
    </>
  );
};

export default AgentsModal;
