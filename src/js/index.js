require('../scss/index.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import ThemeDesigner from './components/ThemeDesigner';

const themeDesignerBody = (
  <ThemeDesigner />
);

const element = document.getElementById('content');

ReactDOM.render(themeDesignerBody, element);

document.body.classList.remove('loading');
