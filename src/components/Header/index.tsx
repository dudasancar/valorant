import { Button } from "@material-ui/core";
import React from "react";
import Logo from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

const Header: React.FC = () => {
  function scrollToAgents() {
    window.scroll({
      top: 700,
      behavior: "smooth",
    });
  }

  function scrollToMaps() {
    window.scroll({
      top: 1880,
      behavior: "smooth",
    });
  }

  function scrollToGuns() {
    window.scroll({
      top: 2600,
      behavior: "smooth",
    });
  }

  function scrollToDownload() {
    window.scroll({
      top: 3880,
      behavior: "smooth",
    });
  }

  function scrollToSuporte() {
    window.scroll({
      top: 4800,
      behavior: "smooth",
    });
  }

  return (
    <Container>
      <Content>
        <img src={Logo} />
        <div>
          <p onClick={scrollToAgents}>Agentes</p>
          <p onClick={scrollToMaps}>Mapas</p>
          <p onClick={scrollToGuns}>Arsenal</p>
          <p onClick={scrollToDownload}>Download</p>
          <p onClick={scrollToSuporte}>Suporte</p>
        </div>
        <Button color="secondary" variant="contained">
          Jogue agora
        </Button>
      </Content>
    </Container>
  );
};

export default Header;
