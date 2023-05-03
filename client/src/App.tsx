import React, { useState } from 'react'
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from './styles/globalStyles';
import theme from './styles/theme';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages';

const App: React.FC = () => {
console.log(theme.colors.white)
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
