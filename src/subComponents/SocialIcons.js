import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Twitter, Linkedin } from '../components/AllSvgs'
import { DarkTheme } from '../components/Theme'



const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const Line = styled.span`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};

`

const SocialIcons = (props) => {
  return (
    <Icons>
        <div>
            <a href='http://github.com/3kba' rel="noreferrer" target='_blank'>
                <Github width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} />
            </a>
        </div> 
        <div>
            <a  href='http://github.com/3kba' rel="noreferrer" target='_blank' >
                <Linkedin width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} />
            </a>
        </div>
        <div>
            <a  href='http://github.com/3kba' rel="noreferrer" target='_blank' >
                <Twitter width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} />
            </a>
        </div>
        <div>
            <a  href='http://github.com/3kba' rel="noreferrer" target='_blank' >
                <Facebook width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} />
            </a>
        </div>
        <Line color={props.theme} />
    </Icons>
  )
}

export default SocialIcons