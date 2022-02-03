import React, { useEffect, useState } from "react";
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
import { getAgents } from "../../services/ListAgents";

const Agents: React.FC = () => {
  const [openModalAgents, setOpenModalAgents] = useState<boolean>(false);
  const [listAgents, setListAgents] = useState([]);
  useEffect(() => {
    getAgents()
      .then((response: any) => {
        setListAgents(response);
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <AgentsModal
        closeModal={() => setOpenModalAgents(false)}
        open={openModalAgents}
      />
      <Content>
        <h1>Agentes</h1>

        <div className="agents">
          {/* {listAgents.map((agent: any) => (
            <> */}
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={jett} />
            <p>Jett</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={raze} />
            <p>Raze</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={breach} />
            <p>Breach</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={omen} />
            <p>Omen</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={brimstone} />
            <p>Brimstone</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={phoenix} />
            <p>Phoenix</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={sage} />
            <p>Sage</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={sova} />
            <p>Sova</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={viper} />
            <p>Viper</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={cypher} />
            <p>Cypher</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={reyna} />
            <p>Reyna</p>
          </div>
          {/* </>
          ))} */}
          <div className="see-all">
            <img src={img} />
            <p>ver todos</p>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Agents;
