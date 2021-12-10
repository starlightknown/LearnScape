const express = require('express');
const chalk = require('chalk');
require('dotenv').config();

const app  = require('./index.js');

const port = process.env.PORT || 3000;
const log = console.log;

//App operations
log(chalk.cyan('😃 App Started'));

app.listen(port, () => {
	log(chalk.cyan(`🏃 Server started at http://localhost:${port}`));
});
