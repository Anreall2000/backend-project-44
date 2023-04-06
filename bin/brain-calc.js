#!/usr/bin/env node
import greet from '../src/cli.js';
import gameWrapper from '../src/index.js';
import calc from '../src/games/calc.js';

const name = greet();
gameWrapper(name, 'What is the result of the expression?', calc);
