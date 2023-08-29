import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import Home from './templates/app';
import Resume from './templates/resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Determina a rota atual com base na URL
const currentRoute = window.location.pathname;

let content;

// Define o conteúdo com base na rota atual
if (currentRoute === '/resume') {
    content = <Resume />;
} else {
    content = <Home />;
}

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            {content}
            <GlobalStyles />
        </ThemeProvider>
    </React.StrictMode>,
);
