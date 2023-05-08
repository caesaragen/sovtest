import React, { useState } from 'react'
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from './styles/globalStyles';
import theme from './styles/theme';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, PersonDetails } from './pages';
import Header from './components/Header/Header';
import { Person } from './__generated__/graphql';
import { PersonContext, defaultPerson } from './context/PersonContext';

const App: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person>(defaultPerson);
 

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header/>
        <PersonContext.Provider value={{ selectedPerson, setSelectedPerson }}>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/person/:personName" element={<PersonDetails />} />
      </Routes>
      </PersonContext.Provider>
      </Router>
    </ThemeProvider>
  )
}

export default App
