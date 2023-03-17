import { useContext } from "react";
import { IExchange } from "gw2e-shared";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import CoinGroup from "~/components/CoinGroup/CoinGroup";
import { GemIcon } from "~/components/Icon/Icon";
import { ThemeContext } from "~/components/ThemeProvider/ThemeProvider";

type ExchangeChartProps = {
  data: IExchange[];
};

export default function ExchangeChart({ data }: ExchangeChartProps) {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <ResponsiveContainer minHeight={"500px"}>
      <LineChart data={data} desc={"historical exchange data for the last 48 hours"}>
        <Legend
          formatter={(value: string) => {
            return (
              <>
                {`${value.toUpperCase()} with 100`}
                <GemIcon className={"inline"} size={16} />
              </>
            );
          }}
        />
        <CartesianGrid strokeDasharray={3} />
        <Line dataKey={"buy"} dot={false} stroke={"#3abff8"} strokeWidth={3} type={"monotone"} />
        <Line dataKey={"sell"} dot={false} stroke={"#f87272"} strokeWidth={3} type={"monotone"} />
        <XAxis
          dataKey={"timestamp"}
          interval={"preserveStartEnd"}
          minTickGap={30}
          tick={{ fill: isDarkTheme ? "#fff" : "#000" }}
          tickFormatter={(tick: string) => {
            return `${new Date(tick).getUTCHours().toString().padStart(2, "0")}:${new Date(tick)
              .getUTCMinutes()
              .toString()
              .padStart(2, "0")}`;
          }}
        />
        <YAxis
          domain={["dataMin - 100", "dataMax + 100"]}
          interval={"preserveStartEnd"}
          padding={{ top: 30, bottom: 30 }}
          tick={{ fill: isDarkTheme ? "#fff" : "#000" }}
          tickFormatter={(tick) => `${Math.round(tick / 100)}`}
          type={"number"}
          mirror
        />
        <Tooltip
          content={(props) => {
            if (props.active && props.payload && props.label) {
              return (
                <div className={"bg-base-100 text-base-content rounded border p-2"}>
                  <p className={"font-semibold"}>{new Date(props.label as string).toUTCString()}</p>
                  <ul className={"space-1"}>
                    {props.payload.map((payload) => {
                      if (payload.value && payload.name) {
                        return (
                          <li className={"space-x-1"} key={payload.name}>
                            <span style={{ color: payload.color }}>{`${payload.name.toString().toUpperCase()}`}</span>
                            <span>:</span>
                            <span>
                              <CoinGroup size={18} value={Number(payload.value)} />
                            </span>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              );
            }
            return null;
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
