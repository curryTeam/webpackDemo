// mian.js
import React from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter';

import './main.css'; //倒入css文件

render(<Greeter />, document.getElementById('root'));
