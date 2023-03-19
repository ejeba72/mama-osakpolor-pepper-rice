import pino from "pino";
import dayjs from "dayjs";
import pretty from "pino-pretty";

const options = {
  base: {
    pid: false
  },
  timestamp: () => `,"time":"${dayjs().format('HHmm dddd D MMMM YYYY')}"`,
}

const stream = pretty()

const logger = pino(options, stream);

const print = {
  info: (data) => {
    if (!process.env.DEBUG) return;
    logger.info(data);
  },
  error: (data) => {
    if (!process.env.DEBUG) return;
    logger.error(data);
  }
}

export default print;