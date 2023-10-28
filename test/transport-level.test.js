import winston from "winston"

test('create new logger with transport file & transport level', () => {
    const logger  = winston.createLogger({
        level: "info",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
        ),
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "application.log"
            }),
            new winston.transports.File({
                level: "error",
                filename: "application-error.log"
            }),
        ]
    })

    logger.info({ message: "Hello Logging" })
    logger.error({ message: "Hello Logging" })
})
