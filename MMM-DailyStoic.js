Module.register("MMM-DailyStoic", {
    defaults: {
        updateInterval: 6 * 60 * 60 * 1000,  // Aktualizacja co 24 godziny
        url: "https://dailystoic.com/quote.json",  // URL do JSON-a
        showTitle: true,
        showQuote: true,
        showDescription: true
    },

    start: function() {
        Log.info("MMM-DailyStoic: Moduł startuje");
        this.getData();
        this.scheduleUpdate();
    },

    getData: function() {
        this.sendSocketNotification("GET_DAILY_QUOTE", this.config.url);
    },

    getDom: function() {
        var wrapper = document.createElement("div");

        if (this.config.showTitle && this.title) {
            var titleElement = document.createElement("h2");
            titleElement.className = "bright medium";
            titleElement.innerHTML = this.title;
            wrapper.appendChild(titleElement);
        }

        if (this.config.showQuote && this.quote) {
            var quoteElement = document.createElement("p");
            quoteElement.className = "light small";
            quoteElement.innerHTML = this.quote;
            wrapper.appendChild(quoteElement);
        }

        if (this.config.showDescription && this.description) {
            var descriptionElement = document.createElement("p");
            descriptionElement.className = "small bright";
            descriptionElement.innerHTML = this.description;
            wrapper.appendChild(descriptionElement);
        }

        return wrapper;
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === "DAILY_QUOTE_RESULT") {
            this.title = payload.title;
            this.quote = payload.quote;
            this.description = payload.description;
            this.updateDom();
        }
    },

    scheduleUpdate: function() {
        var self = this;
        setInterval(function() {
            self.getData();
        }, this.config.updateInterval);
    }
});
