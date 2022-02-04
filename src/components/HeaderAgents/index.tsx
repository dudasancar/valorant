import { Button } from "@material-ui/core";
import React from "react";
import Logo from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

const HeaderAgents: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} />
        <div>
          <p>Agentes</p>
          <p>Mapas</p>
          <p>Arsenal</p>
          <p>Download</p>
          <p>Suporte</p>
        </div>
        <Button color="secondary" variant="contained">
          Jogue agora
        </Button>
      </Content>
    </Container>
  );
};

export default HeaderAgents;
