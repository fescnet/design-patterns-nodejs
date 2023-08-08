const Logger = require('./Logger')

const logger = new Logger()
logger.log('First log')
logger.changeStrategy('toFile')
logger.log('Second log')