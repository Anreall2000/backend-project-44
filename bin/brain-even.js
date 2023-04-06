#!/usr/bin/env node
import greet from '../src/cli.js';
import gameWrapper from '../src/index.js';
import even from '../src/games/even.js';

const name = greet();
gameWrapper(name, 'Answer "yes" if the number is even, otherwise answer "no".', even);
