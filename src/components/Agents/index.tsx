import React, { useState } from "react";
import { Container, Content } from "./styles";
import jett from "../../assets/jett.png";
import raze from "../../assets/raze.png";
import breach from "../../assets/breach.png";
import omen from "../../assets/omen.png";
import brimstone from "../../assets/brimstone.png";
import phoenix from "../../assets/phoenix.png";
import sage from "../../assets/sage.png";
import sova from "../../assets/sova.png";
import viper from "../../assets/viper.png";
import cypher from "../../assets/cypher.png";
import reyna from "../../assets/reyna.png";
import img from "../../assets/see-all.png";
import AgentsModal from "../AgentsModal";

const Agents: React.FC = () => {
  const [openModalAgents, setOpenModalAgents] = useState<boolean>(false);
  return (
    <>
      <AgentsModal
        closeModal={() => setOpenModalAgents(false)}
        open={openModalAgents}
      />
      <Container>
        <AgentsModal
          closeModal={() => setOpenModalAgents(false)}
          open={openModalAgents}
        />
        <Content className="content">
          <h1>Agentes</h1>
          <div className="agents">
            <img src={jett} onClick={() => setOpenModalAgents(true)} />
            <img src={raze} onClick={() => setOpenModalAgents(true)} />
            <img src={breach} onClick={() => setOpenModalAgents(true)} />
            <img src={omen} onClick={() => setOpenModalAgents(true)} />
            <img src={brimstone} onClick={() => setOpenModalAgents(true)} />
            <img src={phoenix} onClick={() => setOpenModalAgents(true)} />
            <img src={sage} onClick={() => setOpenModalAgents(true)} />
            <img src={sova} onClick={() => setOpenModalAgents(true)} />
            <img src={viper} onClick={() => setOpenModalAgents(true)} />
            <img src={cypher} onClick={() => setOpenModalAgents(true)} />
            <img src={reyna} onClick={() => setOpenModalAgents(true)} />
            <div>
              <img src={img} className="see-all" />
              <p>ver todos</p>
            </div>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default Agents;
