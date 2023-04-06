#!/usr/bin/env node
import greet from '../src/cli.js';
import gameWrapper from '../src/index.js';
import prime from '../src/games/prime.js';

const name = greet();
gameWrapper(name, 'Answer "yes" if given number is prime. Otherwise answer "no".', prime);
