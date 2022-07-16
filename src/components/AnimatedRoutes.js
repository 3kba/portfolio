import React from 'react'
import { Route, Routes, useLocation } from 'react-router'
import AboutPage from './AboutPage'
import BlogPage from './BlogPage'
import Main from './Main'
import MySkillsPage from './MySkillsPage'
import WorkPage from './WorkPage'

import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/about' element={<AboutPage />} />
            <Route exact path='/blog' element={<BlogPage />} />
            <Route exact path='/work' element={<WorkPage />} />
            <Route exact path='/skills' element={<MySkillsPage />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes