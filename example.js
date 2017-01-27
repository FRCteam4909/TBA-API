const tba = require("tba-js");

// Needs to follow this pattern:
// - `<team/person id>:<app description>:<version>`
tba.setAppID("frc4909:tba-api:v0.0.1");

tba.getMatches("2016", "casd", (data) =>{
    console.dir(data);
});