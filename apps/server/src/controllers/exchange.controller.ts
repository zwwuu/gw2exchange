import { NextFunction, Request, Response } from "express";

import ExchangeService from "~/services/exchange.service";

class ExchangeController {
  private exchangeService = new ExchangeService();

  public getPriceHistory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const exchangeData = await this.exchangeService.findPriceHistory();

      res.status(200).json(exchangeData);
    } catch (error) {
      next(error);
    }
  };

  public getTodayPrice = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const exchangeData = await this.exchangeService.findTodayPrice();

      res.status(200).json(exchangeData);
    } catch (error) {
      next(error);
    }
  };

  public getYesterdayPrice = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const exchangeData = await this.exchangeService.findYesterdayPrice();

      res.status(200).json(exchangeData);
    } catch (error) {
      next(error);
    }
  };

  public getPrevWeekPrice = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const exchangeData = await this.exchangeService.findPrevWeekPrice();

      res.status(200).json(exchangeData);
    } catch (error) {
      next(error);
    }
  };

  public getPrevMonthPrice = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const exchangeData = await this.exchangeService.findPrevMonthPrice();

      res.status(200).json(exchangeData);
    } catch (error) {
      next(error);
    }
  };
}

export default ExchangeController;
