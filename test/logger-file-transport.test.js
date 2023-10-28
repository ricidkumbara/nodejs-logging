import winston from "winston"

test('create new logger with transport', () => {
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
        ]
    })

    logger.info({ message: "Hello Logging" })
})
