import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Theme";
import { Design, Develope } from "./AllSvgs";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";

import astroman from "../assets/Images/astroman.png";
import { motion } from "framer-motion";

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: 10rem;
  top: 10rem;
  font-family: "Ubutntu Mono", monospace;
`;

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;
const Spaceman = styled.div`
  animation: ${float} 4s ease infinite;

  position: absolute;
  top: 10%;
  right: 5%;
  width: 40vw;
  img {
    width: 100%;
    height: auto;
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: "100vh" }}
        transition={{ ease: "circOut", type: "tween", duration: 1 }}
      >
        <LogoComponent theme={"dark"} />
        <SocialIcons theme={"dark"} />
        <PowerButton theme={"dark"} />
        <ParticleComponent theme={"dark"} />
        <Spaceman>
          <img src={astroman} alt="spaceman" />
        </Spaceman>

        <Main>
          I'm a front-end developer located in Algeria. I love to create simple
          yet beautiful websites with great user experience.
          <br /> <br />
          I'm interested in the whole frontend stack Like trying new things and
          building great projects. I'm an independent freelancer. I love to
          write blogs and read books.
          <br /> <br />I believe everything is an Art when you put your
          consciousness in it. You can connect with me via social links.
        </Main>
        {/* <Main>
          <Title>
              <Design width={40} height={40} /> Desginer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minmal and simple.

          </Description>

        </Main> */}
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
