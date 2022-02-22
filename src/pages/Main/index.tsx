import React from "react";
import Header from "../../components/Header";
import { Container } from "./styles";
import title from "../../assets/title.png";
import Agents from "./Agents";
import Maps from "./Maps";
import Guns from "./Guns";
import Download from "./Download";
import Suporte from "./Suporte";

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <div className="titleDiv">
        <img src={title} className="title" />
      </div>
      <Agents />
      <div className="background">
        <Maps />
        <Guns />
        <Download />
        <Suporte />
      </div>
    </Container>
  );
};

export default Main;
