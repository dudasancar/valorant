import React from "react";
import Header from "../../components/Header";
import { Container } from "./styles";
import title from "../../assets/title.png";
import Agents from "../../components/Agents";
import Maps from "../../components/Maps";
import Guns from "../../components/Guns";
import Download from "../../components/Download";
import Suporte from "../../components/Suporte";

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <div className="titleDiv">
        <img src={title} className="title" />
      </div>
      <Agents />
      <Maps />
      <Guns />
      <Download />
      <Suporte />
    </Container>
  );
};

export default Main;
