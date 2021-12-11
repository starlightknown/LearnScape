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

function serverDownAlerts() {
	//Twillio function here
}

process.on('unhandledRejection', err => {
	console.log(err.name, err.message);
	console.log('Unhandled Error Detected! 💥 Closing down the application...');

	server.close(() => {
		serverDownAlerts();
		process.exit(1);
	});
});

process.on('SIGTERM', () => {
	console.log('SIGTERM received. Shutting down the server 👋');
	server.close(() => {
		serverDownAlerts();
		console.log('💥 Process terminated');
	});
});