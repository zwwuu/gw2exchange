import { GetServerSidePropsContext, GetServerSidePropsResult, InferGetServerSidePropsType } from "next";
import { IconInfoCircle } from "@tabler/icons-react";
import axios from "axios";
import { IExchange, IExchangeDetail } from "gw2e-shared";

import Ads from "~/components/Ads/Ads";
import ExchangeCalculator from "~/components/ExchangeCalculator/ExchangeCalculator";
import ExchangeChart from "~/components/ExchangeChart/ExchangeChart";
import ExchangeDetails from "~/components/ExchangeDetails/ExchangeDetails";
import ExchangeRates from "~/components/ExchangeRates/ExchangeRates";
import useLocalTime from "~/hooks/useLocalTime";

type HomePageProps = {
  history: IExchange[];
  todayPrice: IExchangeDetail;
  yesterdayPrice: IExchangeDetail;
  prevWeekPrice: IExchangeDetail;
  prevMonthPrice: IExchangeDetail;
};

export default function HomePage({
  history,
  todayPrice,
  yesterdayPrice,
  prevWeekPrice,
  prevMonthPrice,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const latestPrice = history.length > 0 ? history[history.length - 1] : null;
  const localTime = useLocalTime(latestPrice?.timestamp);

  return (
    <main>
      <p className={"mb-4 text-xl font-bold"}>{process.env.NEXT_PUBLIC_APP_DESCRIPTION}</p>
      {latestPrice !== null ? (
        <>
          <div className={"mb-4 text-right text-sm"}>
            <p>
              <span className={"text-accent font-semibold"}>Updated at: </span>
              {new Date(latestPrice.timestamp).toUTCString()}
            </p>
            <p>
              <span className={"text-secondary font-semibold"}>{"Local time: "}</span>
              {localTime}
            </p>
          </div>
          <div className={"grid auto-rows-auto grid-cols-12 gap-4"}>
            <div className={"col-span-full"}>
              <div className={"card-compact card-bordered card h-full shadow"}>
                <div className={"card-body"}>
                  <h2 className={"card-title"}>Currency Exchange - last 48 hours</h2>
                  <ExchangeChart data={history} />
                  <ExchangeRates
                    buyPrice={latestPrice.buy}
                    sellPrice={latestPrice.sell}
                    yesterdayBuyAverage={yesterdayPrice.buy.average}
                    yesterdaySellAverage={yesterdayPrice.sell.average}
                  />
                </div>
              </div>
            </div>
            <div className={"col-span-full md:col-span-6"}>
              <Ads />
            </div>

            <div className={"col-span-full md:col-span-6"}>
              <ExchangeCalculator buyPrice={latestPrice.buy} sellPrice={latestPrice.sell} />
            </div>

            <div className={"col-span-full"}>
              <ExchangeDetails
                month={prevMonthPrice}
                today={todayPrice}
                week={prevWeekPrice}
                yesterday={yesterdayPrice}
              />
            </div>
          </div>
        </>
      ) : (
        <div className={"alert alert-warning shadow"}>
          <div>
            <IconInfoCircle />
            <div>
              <p className={"text-xl font-bold"}>No data available now!</p>
              <p className={"text-sm"}>Come back again later.</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<HomePageProps>> {
  context.res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");

  const historyRes = await axios.get<IExchange[]>(`${process.env.SERVER_URL}/exchange/history`);
  const todayRes = await axios.get<IExchangeDetail>(`${process.env.SERVER_URL}/exchange/today`);
  const yesterdayRes = await axios.get<IExchangeDetail>(`${process.env.SERVER_URL}/exchange/yesterday`);
  const weekRes = await axios.get<IExchangeDetail>(`${process.env.SERVER_URL}/exchange/week`);
  const monthRes = await axios.get<IExchangeDetail>(`${process.env.SERVER_URL}/exchange/month`);

  const history = historyRes.data;
  const todayPrice = todayRes.data;
  const yesterdayPrice = yesterdayRes.data;
  const prevWeekPrice = weekRes.data;
  const prevMonthPrice = monthRes.data;

  return {
    props: {
      history,
      todayPrice,
      yesterdayPrice,
      prevWeekPrice,
      prevMonthPrice,
    },
  };
}
