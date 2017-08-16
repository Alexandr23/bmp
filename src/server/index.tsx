const http = require("http");
import app from '../server';
const appConfig = require('../../config/main');
const Chalk = require('chalk');


const server = http.createServer(app);
let currentApp = app;


server.listen(appConfig.port, appConfig.host, (err: any) => {
  if (err) {
    console.error(Chalk.bgRed(err));
  } else {
    console.info(Chalk.black.bgGreen(
      `\n\n💂  Listening at http://${appConfig.host}:${appConfig.port}\n`,
    ));
  }
});


if ((module as any).hot) {
  (module as any).hot.accept("../server", () => {
    server.removeListener("request", currentApp);
    server.on("request", app);
    currentApp = app;
  });
}