const { compile } = require('./compile');
const path = require('path');

const file = path.join(__dirname, "../index.ts");
compile([file]);
