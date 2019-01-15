import { LogType, ILogger } from './Ilogger';
import { ConsoleLogger } from './console-logger';

export class LoggerFactory {
    public static Create(logType: LogType) : ILogger {
        switch (logType) {
            case LogType.Console:
                return new ConsoleLogger();
            default:
                return new ConsoleLogger(); // You get the idea.
        }
    }
}