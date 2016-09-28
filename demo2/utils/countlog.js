function showCount(count) {
  console.log("current app or page show count: " + count);
}

function hideCount(count) {
  console.log("current app or page hide count: " + count);
}

function log(msg) {
  console.log(msg);
}

module.exports = {
  showCount: showCount,
  hideCount: hideCount,
  log: log
}