import { ExchangeModel, IExchange, IExchangeDetail } from "gw2e-shared";
import { DateTime } from "luxon";

class ExchangeService {
  public async findPriceHistory() {
    const exchangeData: IExchange[] = await ExchangeModel.find(
      {
        timestamp: {
          $gte: DateTime.utc().minus({ hour: 48 }),
          $lte: DateTime.utc(),
        },
      },
      {
        _id: 0,
        buy: 1,
        sell: 1,
        timestamp: 1,
      },
      { sort: { timestamp: 1 } },
    );

    return exchangeData;
  }

  public async findTodayPrice() {
    const startOfToday = DateTime.utc().startOf("day");
    const endOfToday = DateTime.utc().endOf("day");

    return await this.aggregateDetailRate(startOfToday, endOfToday);
  }

  public async findYesterdayPrice() {
    const startOfYesterday = DateTime.utc().minus({ day: 1 }).startOf("day");
    const endOfYesterday = DateTime.utc().minus({ day: 1 }).endOf("day");

    return await this.aggregateDetailRate(startOfYesterday, endOfYesterday);
  }

  public async findPrevWeekPrice() {
    const startOfPrevWeek = DateTime.utc().minus({ week: 1 }).startOf("week");
    const endOfPrevWeek = DateTime.utc().minus({ week: 1 }).endOf("week");

    return await this.aggregateDetailRate(startOfPrevWeek, endOfPrevWeek);
  }

  public async findPrevMonthPrice() {
    const startOfPrevMonth = DateTime.utc().minus({ month: 1 }).startOf("month");
    const endOfPrevMonth = DateTime.utc().minus({ month: 1 }).endOf("month");

    return await this.aggregateDetailRate(startOfPrevMonth, endOfPrevMonth);
  }

  private aggregateDetailRate = async (start: DateTime, end: DateTime): Promise<IExchangeDetail> => {
    const exchangeData: IExchangeDetail[] = await ExchangeModel.aggregate([
      {
        $match: {
          timestamp: {
            $gte: start,
            $lte: end,
          },
        },
      },
      {
        $group: {
          _id: null,
          buy_average: { $avg: "$buy" },
          buy_max: {
            $max: {
              price: "$buy",
              timestamp: "$timestamp",
              id: "$_id",
            },
          },
          buy_min: {
            $min: {
              price: "$buy",
              timestamp: "$timestamp",
              id: "$_id",
            },
          },
          sell_average: { $avg: "$sell" },
          sell_max: {
            $max: {
              price: "$sell",
              timestamp: "$timestamp",
              id: "$_id",
            },
          },
          sell_min: {
            $min: {
              price: "$sell",
              timestamp: "$timestamp",
              id: "$_id",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          buy: {
            average: { $round: "$buy_average" },
            low: "$buy_min",
            high: "$buy_max",
          },
          sell: {
            average: { $round: "$sell_average" },
            low: "$sell_min",
            high: "$sell_max",
          },
          timestamp: {
            from: start,
            to: end,
          },
        },
      },
    ]);

    return exchangeData.length === 0
      ? {
          buy: {
            average: null,
            low: null,
            high: null,
          },
          sell: {
            average: null,
            low: null,
            high: null,
          },
          timestamp: {
            from: start.toJSDate(),
            to: end.toJSDate(),
          },
        }
      : exchangeData[0];
  };
}

export default ExchangeService;
