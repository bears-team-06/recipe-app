import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.module.css'
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: '#3d4961',
  primaryLight: '#4F83CC',
  secondary: "#ef6c00",
  secondaryLight: "#ff9d3f",
  textColor: "#ffffff",
  font: "Roboto"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>, 
  document.getElementById('root'));