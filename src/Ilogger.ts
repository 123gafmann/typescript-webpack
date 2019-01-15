export enum LogType {
    Console,
    Alert,
    Toast
}

export interface ILogger {
    log(message: string): void;
}
