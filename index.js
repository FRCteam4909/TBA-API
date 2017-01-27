module.exports = {
    _AppID: "",
    
    setAppID: function(appID){
        this._AppID = appID;
    },
    
    getMatches: function(year, event, callback){
        var http = require("https");

        var options = {
          "method": "GET",
          "hostname": "www.thebluealliance.com",
          "port": null,
          "path": "/api/v2/event/" + year + event + "/matches",
          "headers": {
            "x-tba-app-id": this._AppID,
            "cache-control": "no-cache"
          }
        };

        var req = http.request(options, function (res) {
          var chunks = [];

          res.on("data", function (chunk) {
            chunks.push(chunk);
          });

          res.on("end", function () {
            var body = Buffer.concat(chunks);
              
            callback(body.toString());
          });
        });

        req.end();
    }
};