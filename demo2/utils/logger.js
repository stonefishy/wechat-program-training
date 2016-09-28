function displayCount(pageInstance) {
    if(pageInstance && pageInstance.pageData.show != undefined) {
      log(decorade("Current Page - Show Count: " + pageInstance.pageData.show));
    }

    if(pageInstance && pageInstance.pageData.hide != undefined) {
      log(decorade("Current Page - Hide Count: " + pageInstance.pageData.hide));
    }

    var app = getApp();
    log(decorade("App - Show Count: " + app.globalData.show));
    log(decorade("App - Hide Count: " + app.globalData.hide));
}

function decorade (msg) {
  return "***" + msg + "***";
}

function log(msg) {
  console.log(msg);
}

module.exports = {
  displayCount: displayCount,
  log: log
}