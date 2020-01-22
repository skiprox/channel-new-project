const chalk = require('chalk');
const log = console.log;

const checkValid = (val) => {
	var valid = !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(val);
	return valid || chalk.red('This isnt fucking valid stop putting special characters in there');
}

module.exports = [
	{
		type: 'input',
		name: 'name',
		message: chalk.inverse('Project name:'),
		validate: function(val) {
			return checkValid(val);
		}
	},
	{
		type: 'input',
    	name: 'components',
    	message: chalk.inverse('Desired components (put spaces in between):'),
    	validate: function(val) {
    		return checkValid(val);
    	}
	},
	{
		type: 'confirm',
		name: 'includeGreensock',
		message: chalk.inverse('Include Greensock in the build?'),
		default: false
	},
	{
		type: 'list',
		name: 'testlist',
		message: chalk.inverse('Testing out lists here...'),
		choices: ['Fast', 'Slow']
	}
];
