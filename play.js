const {connect} = require("./client");
const {setupInput} = require("./input");

console.log("Connecting ...");
let conn = connect();//Connect to server and begin game
setupInput(conn);
