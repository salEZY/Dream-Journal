import logger from "pino";
import pretty from "pino-pretty";

const log = logger(pretty({ translateTime: "SYS:standard" }));

export default log;
