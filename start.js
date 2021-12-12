const concurently = require('concurrently');
const chalk = require('chalk');
const figlet = require('figlet');
const _ = require('lodash');

/**
 * This script run npm proccesses concurrently
 *
 * Usage: node start [install-children|test|api|client|api:client|api:client]
 *
 * Example:
 * * node start install-children
 * * node start test
 * * node start api
 * * node start client
 * * node start api:client
 */

const getUppercaseArgs = () => {
  validArgs = [
    'install-children',
    'test',
    'api',
    'client',
    'api:client',
  ];

  if (process.argv.length === 2) {
    process.argv.push('api:client');
  } else if (process.argv.length > 3) {
    throw new Error(`[-] Invalid command. Please specify only one argument`);
  }

  if (_.findIndex(validArgs, (arg) => arg === process.argv[2]) === -1) {
    throw new Error(`[-] Invalid argument "${process.argv[2]}"`);
  }
  const args = process.argv[2].split(':').map((arg) => arg.toUpperCase());
  return args;
};

const run = () => {
  const artText = figlet.textSync(' LearnScape', { font: 'ANSI Shadow' });
  console.log(chalk.cyan(artText));

  const upperCaseArgs = getUppercaseArgs();
  let availableCommands = [
    {
      command: 'node start-helper install-children',
      name: 'INSTALL-CHILDREN',
      prefixColor: 'gray',
    },
    {
      command: 'node start-helper test',
      name: 'TEST',
      prefixColor: 'cyan',
    },
    {
      command: 'node start-helper api',
      name: 'API',
      prefixColor: 'cyan',
    },
    {
      command: 'node start-helper client',
      name: 'CLIENT',
      prefixColor: 'yellow',
    },
  ];

  const commands = _.filter(availableCommands, (command) => {
    return _.some(upperCaseArgs, (arg) => command.name === arg);
  });

  const options = {
    prefix: 'name',
    restartTries: 0,
    restartDelay: 0,
    successCondition: 'all',
  };

  if (_.isEqual(upperCaseArgs, ['INSTALL-CHILDREN'])) {
    options.raw = true;
  }

  concurently(commands, options)
    .then((success, failure) => {})
    .catch((err) => {
      if (err) {
        process.exit(1);
      }
    });
};

run();