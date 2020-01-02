import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';


const title: string = 'React with Webpack, Babel and TypeScript.';

ReactDOM.render(
<div>{title}</div>,
document.getElementById('app')
);
