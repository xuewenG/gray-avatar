const fs = require('fs')
const yaml = require('js-yaml');

const config = yaml.safeLoad(fs.readFileSync('data/config.yml', 'utf8'));
module.exports = config
