import { IExchangeDetail } from "gw2e-shared";

import CoinGroup from "~/components/CoinGroup/CoinGroup";
import { GemIcon } from "~/components/Icon/Icon";
import useLocalTime from "~/hooks/useLocalTime";

type ExchangeDetailPanelProps = {
  detail: IExchangeDetail;
};
export default function ExchangeDetailPanel({ detail }: ExchangeDetailPanelProps) {
  const fromLocalTime = useLocalTime(detail.timestamp.from);
  const toLocalTime = useLocalTime(detail.timestamp.to);

  return (
    <div>
      <div className={"mb-4 text-sm"}>
        <p>
          <span className={"text-accent font-semibold"}>Server time: </span>
          {`${new Date(detail.timestamp.from).toUTCString()} - ${new Date(detail.timestamp.to).toUTCString()}`}
        </p>
        <p>
          <span className={"text-secondary font-semibold"}>Local time: </span>
          {`${fromLocalTime} - ${toLocalTime}`}
        </p>
      </div>
      <div className={"flex flex-col overflow-x-auto md:flex-row md:space-x-6"}>
        <div className={"flex flex-grow flex-col"}>
          <h2 className={"card-title underline decoration-dotted underline-offset-2"}>Average</h2>
          <div className={"divide-y"}>
            <div className={"flex flex-col py-2"}>
              <div className={"font-bold"}>
                <span className={"text-error uppercase"}>Selling </span>
                <span className={"inline-flex items-center"}>
                  <span className={"text-base-content/60 text-2xl"}>100</span>
                  <GemIcon className={"inline"} size={24} />
                </span>
                gives
              </div>
              <div className={"text-4xl font-extrabold"}>
                {detail.sell.average === null ? (
                  <span className={"text-warning uppercase"}>No data</span>
                ) : (
                  <CoinGroup value={detail.sell.average} />
                )}
              </div>
            </div>
            <div className={"flex flex-col py-2"}>
              <div className={"font-bold"}>
                <span className={"text-info uppercase"}>Buying </span>
                <span className={"inline-flex items-center"}>
                  <span className={"text-base-content/80 text-2xl"}>100</span>
                  <GemIcon className={"inline"} size={24} />
                </span>
                takes
              </div>
              <div className={"text-4xl font-extrabold"}>
                {detail.buy.average === null ? (
                  <span className={"text-warning uppercase"}>No data</span>
                ) : (
                  <CoinGroup value={detail.buy.average} />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={"divider divider-vertical md:divider-horizontal"} />

        <div className={"flex flex-grow flex-col"}>
          <h2 className={"card-title underline decoration-dotted underline-offset-2"}>Low</h2>
          <div className={"divide-y"}>
            <div className={"flex flex-col py-2"}>
              <div className={"font-bold"}>
                <span className={"text-error uppercase"}>Selling </span>
                <span className={"inline-flex items-center"}>
                  <span className={"text-base-content/80 text-2xl"}> 100 </span>
                  <GemIcon className={"inline"} size={24} />
                </span>
                gives
              </div>
              {detail.sell.low === null ? (
                <div className={"text-4xl font-extrabold"}>
                  <span className={"text-warning uppercase"}>No data</span>
                </div>
              ) : (
                <>
                  <div className={"text-4xl font-extrabold"}>
                    <CoinGroup value={detail.sell.low.price} />
                  </div>
                  <div className={"text-base-content/60 text-sm"}>
                    {new Date(detail.sell.low.timestamp).toUTCString()}
                  </div>
                </>
              )}
            </div>
            <div className={"flex flex-col py-2"}>
              <div className={"font-bold"}>
                <span className={"text-info uppercase"}>Buying </span>
                <span className={"inline-flex items-center"}>
                  <span className={"text-base-content/80 text-2xl"}> 100 </span>
                  <GemIcon className={"inline"} size={24} />
                </span>
                takes
              </div>
              <div className={"text-4xl font-extrabold"}>
                {detail.buy.low === null ? (
                  <div className={"text-4xl font-extrabold"}>
                    <span className={"text-warning uppercase"}>No data</span>
                  </div>
                ) : (
                  <>
                    <div className={"text-4xl font-extrabold"}>
                      <CoinGroup value={detail.buy.low.price} />
                    </div>
                    <div className={"text-base-content/60 text-sm"}>
                      {new Date(detail.buy.low.timestamp).toUTCString()}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={"divider divider-vertical md:divider-horizontal"} />

        <div className={"flex flex-grow flex-col"}>
          <h2 className={"card-title underline decoration-dotted underline-offset-2"}>High</h2>
          <div className={"divide-y"}>
            <div className={"flex flex-col py-2"}>
              <div className={"font-bold"}>
                <span className={"text-error uppercase"}>Selling </span>
                <span className={"inline-flex items-center"}>
                  {" "}
                  <span className={"text-base-content/80 text-2xl"}> 100 </span>
                  <GemIcon className={"inline"} size={24} />
                </span>
                gives
              </div>
              <div className={"text-4xl font-extrabold"}>
                {detail.sell.high === null ? (
                  <div className={"text-4xl font-extrabold"}>
                    <span className={"text-warning uppercase"}>No data</span>
                  </div>
                ) : (
                  <>
                    <div className={"text-4xl font-extrabold"}>
                      <CoinGroup value={detail.sell.high.price} />
                    </div>
                    <div className={"text-base-content/60 text-sm"}>
                      {new Date(detail.sell.high.timestamp).toUTCString()}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className={"flex flex-col py-2"}>
              <div className={"font-bold"}>
                <span className={"text-info uppercase"}>Buying </span>
                <span className={"inline-flex items-center"}>
                  {" "}
                  <span className={"text-base-content/80 text-2xl"}> 100 </span>
                  <GemIcon className={"inline"} size={24} />
                </span>
                takes
              </div>
              <div className={"text-4xl font-extrabold"}>
                {detail.buy.high === null ? (
                  <div className={"text-4xl font-extrabold"}>
                    <span className={"text-warning uppercase"}>No data</span>
                  </div>
                ) : (
                  <>
                    <div className={"text-4xl font-extrabold"}>
                      <CoinGroup value={detail.buy.high.price} />
                    </div>
                    <div className={"text-base-content/60 text-sm"}>
                      {new Date(detail.buy.high.timestamp).toUTCString()}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
