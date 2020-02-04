'use strict';

// Normal requires
const { exec } = require('child_process');
const inquirer = require('inquirer');
const chalk = require('chalk');
const log = console.log;

// Custom modules
const introText = require('./welcome');
const questions = require('./questions');

class ChannelNewProject {
	constructor() {
		this.answers = {};
		introText();
		this.startInquiry();
	}
	startInquiry() {
		inquirer.prompt(questions).then((answers) => {
			this.cleanupAnswers(answers);
			log('\n');
			log(this.answers);
			this.runInstall();
		});
	}
	cleanupAnswers(answers) {
		// Special consideration for these
		this.answers.pages = answers.pages.split(' ').map((item) => {
			return item.charAt(0).toUpperCase() + item.substring(1)
		});
		this.answers.slug = answers.name.split(' ').join('-');
		// All other question answers get put into `this.answers` as is
		questions.forEach(question => {
			if (!this.answers[question.name]) {
				this.answers[question.name] = answers[question.name];
			}
		});
	}
	runInstall() {
		exec(`npx gatsby new ${this.answers.slug}`, (error, stdout, stderr) => {
			if (error) {
				console.log(`error: ${error.message}`);
				return;
			}
			if (stderr) {
				console.log(`stderr: ${stderr}`);
				return;
			}
			console.log(`stdout: ${stdout}`);
			console.log('are we fucking done??');
		});
	}
}

new ChannelNewProject();
