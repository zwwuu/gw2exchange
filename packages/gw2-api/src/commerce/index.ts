import axios from "axios";

import { BASE_URL, VERSION } from "../config";
import { ExchangeRate } from "./types";

export class Commerce {
  public static async getGemExchangeRate(quantity: number) {
    const res = await axios.get<ExchangeRate>(`${BASE_URL}/${VERSION}/commerce/exchange/gems?quantity=${quantity}`);

    return res.data;
  }

  public static async getCoinExchangeRate(quantity: number) {
    const res = await axios.get<ExchangeRate>(`${BASE_URL}/${VERSION}/commerce/exchange/coins?quantity=${quantity}`);

    return res.data;
  }
}
