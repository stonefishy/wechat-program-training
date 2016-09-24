//log service

function writeLog(msg) {
	var logMsg = msg || "Login in this app";	
	return logMsg;
}

module.exports = {
	writeLog: writeLog
}
