import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
${normalize}

	html {
		box-sizing: border-box;
		scroll-behavior: smooth;
	}

	*:focus {
		outline: 0 !important;
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	body {
		font-family: 'Oswald';
		font-style: normal;
		font-size: 1.4rem;
		line-height: 2.5rem;
		background: #ffffff;
		margin: 0;
		overflow-x: hidden;
	}
`;


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
