import logger from "pino";

const levels = {
  http: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60,
};

const log = logger({
  customLevels: levels, // our defined levels
  useOnlyCustomLevels: true,
  level: "http",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:yyyy-mm-dd hh:MM:ss",
      ignore: "pid",
    },
  },
});

export default log;
