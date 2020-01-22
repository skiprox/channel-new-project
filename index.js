'use strict';

// Normal requires
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
		});
	}
	cleanupAnswers(answers) {
		// Special consideration for these
		this.answers.components = answers.components.split(' ').map((item) => {
			return item.charAt(0).toUpperCase() + item.substring(1)
		});
		// All other question answers get put into `this.answers` as is
		questions.forEach(question => {
			if (!this.answers[question.name]) {
				this.answers[question.name] = answers[question.name];
			}
		});
	}

}

new ChannelNewProject();
