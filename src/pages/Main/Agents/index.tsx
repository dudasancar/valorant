import React, { useEffect, useState } from "react";
import { Container, Content } from "./styles";
import img from "../../../assets/see-all.png";
import AgentsModal from "../../../components/AgentsModal";
import { getAgents } from "../../../services/ListAgents";
import { useNavigate } from "react-router-dom";

const Agents: React.FC = () => {
  const [openModalAgents, setOpenModalAgents] = useState<any | null>(null);
  const [listAgents, setListAgents] = useState([]);
  const navigate = useNavigate();

  const toAgents = () => {
    navigate("/agents");
  };

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
        closeModal={() => setOpenModalAgents(null)}
        open={Boolean(openModalAgents)}
        agent={openModalAgents}
      />
      <Content>
        <h1>Agentes</h1>

        <div className="agents">
          {listAgents.map((agent: any) => (
            <div className="agent" onClick={() => setOpenModalAgents(agent)}>
              <img src={agent?.image} />
              <p>{agent?.name}</p>
            </div>
          ))}
          <div
            className="see-all"
            onClick={() => {
              toAgents();
            }}
          >
            <img src={img} />
            <p>ver todos</p>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Agents;
