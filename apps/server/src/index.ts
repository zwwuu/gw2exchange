import { logger } from "logger";
import mongoose from "mongoose";

import ExchangeRoute from "~/routes/exchange.route";
import App from "./app";

mongoose.set("strictQuery", true);
mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => {
    const app = new App([new ExchangeRoute()]);
    app.listen();
  })
  .catch((err) => {
    logger.error(err);
  });
