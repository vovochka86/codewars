function execute(command, callback) {
var process = require('child_process');
process.exec(command,
    function executecommand(err,stdout,stderr){
    if (err) {
    return callback(new Error("Error has occured"));
    } 
    callback(null,stdout);
    });
}
