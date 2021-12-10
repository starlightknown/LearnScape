const express = require('express');
const chalk = require('chalk');
const mongoose = require('mongoose');
require('dotenv').config();

const app  = require('./index.js');

const port = process.env.PORT || 3000;
const log = console.log;

//App operations
log(chalk.cyan('😃 App Started'));

const DB = process.env.DATABASE_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
	log(chalk.cyan('💽 Database Connected Successfully'));
})

app.listen(port, () => {
	log(chalk.cyan(`🏃 Server started at http://localhost:${port}`));
});
