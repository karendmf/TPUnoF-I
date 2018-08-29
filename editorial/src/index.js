import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './common/navbar';
import Main from './common/main';
import Create from './componentes/create';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Menu />,
  document.getElementById('nav')
);
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);