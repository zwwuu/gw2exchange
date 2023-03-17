import { Schema, model } from "mongoose";

import { IExchange } from "../interfaces/interface";

const exchangeSchema = new Schema<IExchange>(
  {
    timestamp: { type: Date, required: true },
    buy: { type: Number, required: true },
    sell: { type: Number, required: true },
  },
  {
    timeseries: {
      timeField: "timestamp",
      granularity: "minutes",
    },
  },
);

export const ExchangeModel = model("Exchange", exchangeSchema);
