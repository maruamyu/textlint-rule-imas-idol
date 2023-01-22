const textlint_prh = require('textlint-rule-prh');
const fs = require('fs');

const prh_dict = fs.readFileSync(__dirname + '/prh.yml');

function reporter(context) {
	return textlint_prh.fixer(context, {
		ruleContents: [
			prh_dict,
		],
	})
};

module.exports = {
	linter: reporter,
	fixer: reporter,
};
