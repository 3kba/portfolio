import './App.css';
import GlobalStyle from './globalStyled';
import { ThemeProvider } from 'styled-components';
import { LightTheme , DarkTheme } from './components/Theme';
import {Route, Routes, useLocation} from 'react-router'
import Main from './components/Main'
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import AnimatedRoutes from './components/AnimatedRoutes';
// import SoundBar from './subComponents/SoundBar';



function App() {
  
  const location = useLocation();

  return (
    <>
     <GlobalStyle />
     
     <ThemeProvider theme={LightTheme}>
      {/* <SoundBar /> */}
      <AnimatedRoutes />
      </ThemeProvider> 
    </>
  );
}

export default App;
