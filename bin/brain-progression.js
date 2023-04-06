#!/usr/bin/env node
import greet from '../src/cli.js';
import gameWrapper from '../src/index.js';
import progression from '../src/games/progression.js';

const name = greet();
gameWrapper(name, 'What number is missing in the progression?', progression);
