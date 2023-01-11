import React from 'react';
import { AppContainer } from './Styles'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup, Tweets } from './containers';

function App() {

  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
            <Route index element={<Tweets />} />
            <Route path='/twitters/:id' element={<Tweets />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
