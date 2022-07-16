import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { LightTheme } from './Theme'
import {Design ,Develope } from './AllSvgs';
import PowerButton from '../subComponents/PowerButton';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import ParticleComponent from '../subComponents/ParticleComponent';

import { motion } from 'framer-motion';



const Box = styled(motion.div)`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content:center;
align-items: center;



`


const Main = styled.div`

border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;

font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text} ;
}
`

const Title = styled.h1`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(2em +2vw);

&>*:first-child{
  margin-right: 1rem;
}
${Main}:hover &{
  &>*{
    fill: ${props => props.theme.body};
  }

}


`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.4em + 1vw);
padding: 0.5rem 0 ;

${Main}:hover &{

    color: ${props => props.theme.body};
}

strong{
  margin-bottom: 1rem;
  text-transform: uppercase;
}
ul, p{
  margin-left: 2rem;
}

`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box 
          initial={{opacity: 0}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 1, y: '100vh'}}
          transition={{ease:"circOut",type:"tween",duration: 1}}
          
          >
            <LogoComponent />
            <SocialIcons theme={'light'} />
            <PowerButton theme={'light' }  />
            <ParticleComponent theme='light' />
        {/* <Main>
          <Title>
              <Design width={40} height={40} /> Desginer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minmal and simple.

          </Description>

        </Main> */}
        <Main>
          <Title>
              <Develope width={50} height={50} /> Frontend Developer
          </Title>
          <Description>
              I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
               
          </Description>
          <Description>
              <strong>Skills</strong>
              <p>Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.</p>
          </Description>
          <Description>
              <strong>Tools</strong>
              <p>Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.</p>
          </Description>
        </Main>
        
      </Box>
    </ThemeProvider>
  )
}

export default MySkillsPage