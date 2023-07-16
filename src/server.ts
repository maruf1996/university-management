import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/logger';

let server: Server;

process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('database is connected successfully');

    server = app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    errorLogger.error('failed to database connect', err);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
main();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is Recived');
  if (server) {
    server.close();
  }
});
