import { logger } from "logger";

import { IDaemon } from "./interfaces/IDaemon";

export default class Manager {
  private daemons: IDaemon[];

  constructor(daemons: IDaemon[]) {
    this.daemons = daemons;
  }

  public startAll() {
    logger.info(`=================================`);
    logger.info(`======= Daemons: ${this.daemons.length} =======`);
    this.daemons.forEach((daemon) => {
      daemon.start();
      logger.info(`${daemon.name} Daemon started`);
    });
    logger.info(`=================================`);
  }
}
