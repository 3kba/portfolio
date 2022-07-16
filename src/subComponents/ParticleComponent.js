import particlelight from '../config/particlesjs-config-light.json'
import particledark from '../config/particlesjs-config.json'


import React from 'react'

import Particles from "react-tsparticles";
import styled from 'styled-components';


const Box = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 0;
`


function ParticleComponent(props) {
  // const particlesInit = async (main) => {
  //   console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //   // starting from v2 you can add only the features you need reducing the bundle size
  //   await loadFull(main);
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };
  return (
    
      <Particles options={props.theme === 'light' ? particlelight : particledark} />

  )
}

export default ParticleComponent