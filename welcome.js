const chalk = require('chalk');
const log = console.log;

module.exports = function() {
	log(new Array(31).join('🔥'));
	log('');
	// log(new Array(31).join('💀'));
	// log(chalk.red(new Array(31).join('*')));
	log(chalk.bgWhite.bold(new Array(61).join(' ')));
	log(chalk.black.bgWhite.bold('                       𝖈𝖍𝖆𝖓𝖓𝖊𝖑 𝖘𝖙𝖚𝖉𝖎𝖔                       '));
	log(chalk.bgWhite.bold(new Array(61).join(' ')));
	// log(chalk.red(new Array(31).join('*')));
	// log(new Array(31).join('💀'));
	log('');
	log(new Array(31).join('🔥'));
}
