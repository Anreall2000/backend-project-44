#!/usr/bin/env node
import greet from '../src/cli.js';
import gameWrapper from '../src/index.js';
import calc from '../src/games/calc.js';

const name = greet();
gameWrapper(name, 'Answer "yes" if the number is even, otherwise answer "no".', calc);
