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
		name: 'description',
		message: chalk.inverse('Project description:')
	},
	{
		type: 'input',
    	name: 'pages',
    	message: chalk.inverse('Desired pages excluding index and 404 pages\n(please put spaces in between pages):'),
    	validate: function(val) {
    		return checkValid(val);
    	}
	},
	{
		type: 'confirm',
		name: 'includeGreensock',
		message: chalk.inverse('Include Greensock in the build?'),
		default: false
	}
];
