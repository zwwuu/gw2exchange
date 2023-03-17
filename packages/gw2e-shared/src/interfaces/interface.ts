export interface IExchange {
  timestamp: Date;
  buy: number;
  sell: number;
}

export interface IExchangeDetail {
  buy: {
    average: number | null;
    low: { price: number; timestamp: Date } | null;
    high: { price: number; timestamp: Date } | null;
  };
  sell: {
    average: number | null;
    low: { price: number; timestamp: Date } | null;
    high: { price: number; timestamp: Date } | null;
  };
  timestamp: {
    from: Date;
    to: Date;
  };
}
