#!/usr/bin/env node
import greet from '../src/cli.js';
import gameWrapper from '../src/index.js';
import gcd from '../src/games/gcd.js';

const name = greet();
gameWrapper(name, 'Find the greatest common divisor of given numbers.', gcd);
