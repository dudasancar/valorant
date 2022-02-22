import jett from "../assets/agents/jett.png";
import raze from "../assets/agents/raze.png";
import breach from "../assets/agents/breach.png";
import omen from "../assets/agents/omen.png";
import brimstone from "../assets/agents/brimstone.png";
import phoenix from "../assets/agents/phoenix.png";
import sage from "../assets/agents/sage.png";
import sova from "../assets/agents/sova.png";
import viper from "../assets/agents/viper.png";
import cypher from "../assets/agents/cypher.png";
import reyna from "../assets/agents/reyna.png";

export const getAgents = async () => {
  const fakeData = [
    {
      name: "Jett",
      function: "Duelista",
      description:
        "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
      skills: [
        {
          type: 1,
          damage: 5,
        },
        {
          type: 2,
          damage: 8,
        },
        {
          type: 3,
          damage: 10,
        },
        {
          type: 4,
          damage: 30,
        },
      ],
      image: jett,
    },
    {
      name: "Raze",
      function: "Sentinela",
      description:
        "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
      skills: [
        {
          type: 1,
          damage: 6,
        },
        {
          type: 2,
          damage: 3,
        },
        {
          type: 3,
          damage: 13,
        },
        {
          type: 4,
          damage: 25,
        },
      ],
      image: raze,
    },
    {
      name: "Breach",
      function: "Duelista",
      description:
        "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
      skills: [
        {
          type: 1,
          damage: 5,
        },
        {
          type: 2,
          damage: 8,
        },
        {
          type: 3,
          damage: 15,
        },
        {
          type: 4,
          damage: 10,
        },
      ],
      image: breach,
    },
    {
      name: "Omen",
      function: "Controlador",
      description:
        "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
      skills: [
        {
          type: 1,
          damage: 9,
        },
        {
          type: 2,
          damage: 5,
        },
        {
          type: 3,
          damage: 10,
        },
        {
          type: 4,
          damage: 20,
        },
      ],
      image: omen,
    },
    {
      name: "Brimstone",
      function: "Iniciador",
      description:
        "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
      skills: [
        {
          type: 1,
          damage: 5,
        },
        {
          type: 2,
          damage: 5,
        },
        {
          type: 3,
          damage: 10,
        },
        {
          type: 4,
          damage: 20,
        },
      ],
      image: brimstone,
    },
    {
      name: "Phoenix",
      function: "Duelista",
      description:
        "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
      skills: [
        {
          type: 1,
          damage: 15,
        },
        {
          type: 2,
          damage: 8,
        },
        {
          type: 3,
          damage: 10,
        },
        {
          type: 4,
          damage: 30,
        },
      ],
      image: phoenix,
    },
    {
      name: "Sage",
      function: "Iniciador",
      description:
        "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
      skills: [
        {
          type: 1,
          damage: 25,
        },
        {
          type: 2,
          damage: 4,
        },
        {
          type: 3,
          damage: 15,
        },
        {
          type: 4,
          damage: 25,
        },
      ],
      image: sage,
    },
    {
      name: "Sova",
      function: "Duelista",
      description:
        "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
      skills: [
        {
          type: 1,
          damage: 5,
        },
        {
          type: 2,
          damage: 10,
        },
        {
          type: 3,
          damage: 10,
        },
        {
          type: 4,
          damage: 40,
        },
      ],
      image: sova,
    },
    {
      name: "Viper",
      function: "Duelista",
      description:
        "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
      skills: [
        {
          type: 1,
          damage: 12,
        },
        {
          type: 2,
          damage: 18,
        },
        {
          type: 3,
          damage: 20,
        },
        {
          type: 4,
          damage: 15,
        },
      ],
      image: viper,
    },
    {
      name: "Cypher",
      function: "Controlador",
      description:
        "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
      skills: [
        {
          type: 1,
          damage: 10,
        },
        {
          type: 2,
          damage: 15,
        },
        {
          type: 3,
          damage: 10,
        },
        {
          type: 4,
          damage: 20,
        },
      ],
      image: cypher,
    },
    {
      name: "Reyna",
      function: "Iniciador",
      description:
        "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
      skills: [
        {
          type: 1,
          damage: 14,
        },
        {
          type: 2,
          damage: 18,
        },
        {
          type: 3,
          damage: 27,
        },
        {
          type: 4,
          damage: 45,
        },
      ],
      image: reyna,
    },
  ];
  try {
    return Promise.resolve(fakeData);
  } catch (error) {
    return Promise.reject(error.response);
  }
};
