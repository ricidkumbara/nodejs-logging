import winston from "winston"

test('create new logger without transport', () => {
    const logger  = winston.createLogger({})

    logger.log({
        level: "info",
        message: "Hello Logging"
    })
})

test('create new logger with transport', () => {
    const logger  = winston.createLogger({
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.log({
        level: "info",
        message: "Hello Logging"
    })
})
