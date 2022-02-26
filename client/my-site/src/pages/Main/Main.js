import React from 'react';
import News from '../News/News';
import { Route, Routes } from 'react-router-dom';
import Game from '../Game/Game';

const Main = () => {
  return(
    <div>
        <Routes>
        <Route 
            path="/" 
            element={
              <div>
                <Game />
              </div>
            } />
          <Route 
            path="/news" 
            element={
              <div>
                <News />
              </div>
            } />
        </Routes>
      </div>
  );
}

export default Main;
