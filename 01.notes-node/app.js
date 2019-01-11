console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log(user);

fs.appendFileSync(`01.notes-node/greetings.txt`, `Hello ${user.username}`);