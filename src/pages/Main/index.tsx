import React from "react";
import Header from "../../components/Header";
import { Container } from "./styles";
import title from "../../assets/title.png";
import Agents from "../../components/Agents";

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <div className="titleDiv">
        <img src={title} className="title" />
      </div>
      <Agents />
    </Container>
  );
};

export default Main;
