import winston from 'winston'

test('logging level default', () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.log("error", "Hello Error")
    logger.log("warn", "Hello Warning")
    logger.log("info", "Hello Info")
    logger.log("http", "Hello HTTP")
    logger.log("verbose", "Hello Verbose")
    logger.log("debug", "Hello debug")
    logger.log("silly", "Hello Silly")
})

test('logging with specific level', () => {
    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.log("error", "Hello Error")
    logger.log("warn", "Hello Warning")
    logger.log("info", "Hello Info")
    logger.log("http", "Hello HTTP")
    logger.log("verbose", "Hello Verbose")
    logger.log("debug", "Hello debug")
    logger.log("silly", "Hello Silly")
})

test('logging with shortcut function', () => {
    const logger = winston.createLogger({
        level: "silly",
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.error("Hello Error")
    logger.warn("Hello Warning")
    logger.info("Hello Info")
    logger.http("Hello HTTP")
    logger.verbose("Hello Verbose")
    logger.debug("Hello debug")
    logger.silly("Hello Silly")
})
