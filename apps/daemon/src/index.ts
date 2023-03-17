import { logger } from "logger";
import mongoose from "mongoose";

import Exchange from "./daemons/exchange";
import Manager from "./manager";

mongoose.set("strictQuery", true);
mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => {
    const manager = new Manager([new Exchange()]);
    manager.startAll();
  })
  .catch((err) => {
    logger.error(err);
  });
