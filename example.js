const tba = require("tba-rest-api");

tba.setAppID("frc4909:tba-api:v0.0.1")

tba.getMatches("2010", "sc", (data) =>{
    console.dir(data);
});