import { IconEqual, IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import CoinGroup from "~/components/CoinGroup/CoinGroup";
import FeeToolTip from "~/components/FeeToolTip/FeeToolTip";
import { GemIcon, GoldIcon } from "~/components/Icon/Icon";
import Currency from "~/data/ratio";
import { priceToCurrency } from "~/util/formatter";

type ExchangeRatesProps = {
  sellPrice: number;
  buyPrice: number;
  yesterdaySellAverage?: number | null;
  yesterdayBuyAverage?: number | null;
};

export default function ExchangeRates({
  sellPrice,
  buyPrice,
  yesterdaySellAverage,
  yesterdayBuyAverage,
}: ExchangeRatesProps) {
  return (
    <div className={"flex flex-col px-4 py-2"}>
      <div className={"mb-4 flex flex-col md:flex-row md:space-x-6"}>
        <div className={"flex flex-grow flex-col"}>
          <div className={"font-bold"}>
            <span className={"text-error uppercase"}>Selling </span>
            <span className={"inline-flex items-center"}>
              <span className={"text-base-content/80 text-2xl"}> 100 </span>
              <GemIcon className={"inline"} size={24} />
            </span>
            gives
          </div>
          <div className={"text-4xl font-extrabold"}>
            <CoinGroup value={sellPrice} />
          </div>
          {yesterdaySellAverage && (
            <div className={"text-base-content/60 flex items-center text-sm"}>
              {sellPrice > yesterdaySellAverage && <IconTrendingUp className={"text-secondary mr-2"} />}
              {sellPrice < yesterdaySellAverage && <IconTrendingDown className={"text-secondary mr-2"} />}
              {sellPrice === yesterdaySellAverage && <IconEqual className={"text-secondary mr-2"} />}
              <div>
                <CoinGroup size={16} value={sellPrice - yesterdaySellAverage} />
                {" from yesterday's average"}
              </div>
            </div>
          )}
        </div>
        <div className={"divider divider-vertical md:divider-horizontal"} />
        <div className={"flex flex-grow flex-col"}>
          <div className={"font-bold"}>
            <span className={"text-info uppercase"}>Buying </span>
            <span className={"inline-flex items-center"}>
              <span className={"text-base-content/80 text-2xl"}> 100 </span>
              <GemIcon className={"inline"} size={24} />
            </span>
            takes
          </div>
          <div className={"text-4xl font-extrabold"}>
            <CoinGroup value={buyPrice} />
          </div>
          {yesterdayBuyAverage && (
            <div className={"text-base-content/60 flex items-center text-sm"}>
              {buyPrice > yesterdayBuyAverage && <IconTrendingUp className={"text-secondary mr-2"} />}
              {buyPrice < yesterdayBuyAverage && <IconTrendingDown className={"text-secondary mr-2"} />}
              {buyPrice === yesterdayBuyAverage && <IconEqual className={"text-secondary mr-2"} />}
              <div>
                <CoinGroup size={16} value={buyPrice - yesterdayBuyAverage} />
                {" from yesterday's average"}
              </div>
            </div>
          )}
        </div>
        <div className={"divider divider-vertical md:divider-horizontal"} />

        <div className={"flex flex-grow flex-col"}>
          <div className={"font-bold"}>
            <span className={"text-info uppercase"}>Buying </span>
            <span className={"inline-flex items-center"}>
              <span className={"text-base-content/80 text-2xl"}> 1 </span>
              <GoldIcon className={"inline"} size={24} />
            </span>
            takes
          </div>
          <div className={"text-2xl font-extrabold"}>
            <span>{`$${priceToCurrency(sellPrice, Currency.Dollar)}`}</span>
            <span> / </span>
            <span>{`€${priceToCurrency(sellPrice, Currency.Euro)}`}</span>
            <span> / </span>
            <span>{`£${priceToCurrency(sellPrice, Currency.Pound)}`}</span>
          </div>
        </div>
      </div>
      <div className={"mx-auto flex items-center justify-center space-x-1"}>
        <FeeToolTip />
        <p>Transaction fee not calculated</p>
      </div>
    </div>
  );
}
