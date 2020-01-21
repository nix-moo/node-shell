const pwdFile = require('./pwd');
const lsFile = require('./ls');

process.stdout.write('prompt > ');
process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    pwdFile.pwd();
  } else if (cmd === 'ls') {
    lsFile.ls();
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
});
