import React from 'react';
import News from '../News/News';
import { Route, Routes } from 'react-router-dom';
import Game from '../Game/Game';
import Todo from '../Todo/Todo';

import style from './Main.module.css';

const Main = () => {
  return(
    <div className={style.container}>
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
          <Route
          path="/todo"
          element={
            <div>
              <Todo />
            </div>
          } 
          />
        </Routes>
      </div>
  );
}

export default Main;
