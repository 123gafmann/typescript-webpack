import { ILogger, LogType } from './Ilogger';
import { LoggerFactory } from './logger-factory';

const logger: ILogger = LoggerFactory.Create(LogType.Console);
logger.log("Hello Typescript!");