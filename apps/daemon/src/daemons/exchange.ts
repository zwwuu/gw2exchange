import { CronJob } from "cron";
import { Commerce } from "gw2-api";
import { ExchangeModel } from "gw2e-shared";
import { logger } from "logger";
import { DateTime } from "luxon";

import { IDaemon } from "../interfaces/IDaemon";

export default class Exchange implements IDaemon {
  public name = "Exchange";

  public start() {
    const job = new CronJob("*/5 * * * *", () => {
      void (async () => {
        try {
          const coins = 100000000; // 1 gold = 100 silver = 10000 copper = 10000000 coins
          const gems = 100000;
          const buy = await Commerce.getCoinExchangeRate(coins);
          const sell = await Commerce.getGemExchangeRate(gems);

          await ExchangeModel.create({
            buy: buy.coins_per_gem,
            sell: sell.coins_per_gem,
            timestamp: DateTime.utc(),
          });
          logger.info(`Exchange rate added buy=${buy.coins_per_gem} and sell=${sell.coins_per_gem}`);
        } catch (e) {
          logger.error(e);
        }
      })();
    });

    job.start();
  }
}
