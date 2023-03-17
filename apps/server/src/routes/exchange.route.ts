import { Router } from "express";

import ExchangeController from "~/controllers/exchange.controller";
import { Routes } from "~/interfaces/routes.interface";

class ExchangeRoute implements Routes {
  public path = "/exchange";
  public router = Router();
  public exchangeController = new ExchangeController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}/history`,
      (req, res, next) => void this.exchangeController.getPriceHistory(req, res, next),
    );
    this.router.get(
      `${this.path}/today`,
      (req, res, next) => void this.exchangeController.getTodayPrice(req, res, next),
    );
    this.router.get(
      `${this.path}/yesterday`,
      (req, res, next) => void this.exchangeController.getYesterdayPrice(req, res, next),
    );
    this.router.get(
      `${this.path}/week`,
      (req, res, next) => void this.exchangeController.getPrevWeekPrice(req, res, next),
    );
    this.router.get(
      `${this.path}/month`,
      (req, res, next) => void this.exchangeController.getPrevMonthPrice(req, res, next),
    );
  }
}

export default ExchangeRoute;
