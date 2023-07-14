let connection;

const setupInput = function(conn) {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function(key) {
    key === "\u0003" ? process.exit() : null;//Quit if user enters control + C
    key === "w" ? connection.write("Move: up") : null;
    key === "a" ? connection.write("Move: left") : null;
    key === "s" ? connection.write("Move: down") : null;
    key === "d" ? connection.write("Move: right") : null;
  };

  stdin.on("data", handleUserInput);
  
  return stdin;
};

module.exports = {setupInput};