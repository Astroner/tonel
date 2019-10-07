import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import Style from 'nya-style';

import { App } from './App/'
import sts from './Styles.js'
import { store } from './_helpers/'

document.head.appendChild(document.createElement('style')).innerHTML = Style(sts).parse();

render(<Provider store={store} ><App /></Provider>, document.querySelector("#root"))
