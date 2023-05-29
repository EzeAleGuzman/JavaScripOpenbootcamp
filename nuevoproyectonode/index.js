const logger = require('./loggers')


function practicaError() {
    throw new Error('Aca hay un error');
  }
  
  try {
    practicaError();
  } catch (error) {
    logger.error(error.message);
  }
