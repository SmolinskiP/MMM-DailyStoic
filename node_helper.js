var NodeHelper = require("node_helper");
var request = require("request");

module.exports = NodeHelper.create({
    socketNotificationReceived: function(notification, url) {
        if (notification === "GET_DAILY_QUOTE") {
            var self = this;
            request({ url: url, method: "GET" }, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    var data = JSON.parse(body);
                    self.sendSocketNotification("DAILY_QUOTE_RESULT", data);
                } else {
                    console.error("MMM-DailyStoic: Błąd pobierania danych z URL: ", error);
                }
            });
        }
    }
});
