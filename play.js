const net = require("net");
const {connect} = require("./client");

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function(key) {
    key === "\u0003" ? process.exit() : null;//Quit if user enters control + C
  };

  stdin.on("data", handleUserInput);
  
  return stdin;
};

console.log("Connecting ...");
connect();
setupInput();
