import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { IExchangeDetail } from "gw2e-shared";

import ExchangeDetailPanel from "~/components/ExchangeDetailPanel/ExchangeDetailPanel";
import FeeToolTip from "~/components/FeeToolTip/FeeToolTip";

type ExchangeDetailsProps = {
  today: IExchangeDetail;
  yesterday: IExchangeDetail;
  week: IExchangeDetail;
  month: IExchangeDetail;
};

export default function ExchangeDetails({ today, yesterday, week, month }: ExchangeDetailsProps) {
  return (
    <div className={"card-compact card-bordered card shadow"}>
      <div className={"card-body"}>
        <Tab.Group>
          <Tab.List className={"tabs tabs-boxed flex-nowrap overflow-x-auto p-2"}>
            <Tab className={({ selected }) => clsx("tab w-full", { "tab-active": selected })}>Today</Tab>
            <Tab className={({ selected }) => clsx("tab w-full", { "tab-active": selected })}>Yesterday</Tab>
            <Tab className={({ selected }) => clsx("tab w-full", { "tab-active": selected })}>Week</Tab>
            <Tab className={({ selected }) => clsx("tab w-full", { "tab-active": selected })}>Month</Tab>
          </Tab.List>
          <Tab.Panels className={"mb-4"}>
            <Tab.Panel className={"p-2"}>
              <ExchangeDetailPanel detail={today} />
            </Tab.Panel>
            <Tab.Panel className={"p-2"}>
              <ExchangeDetailPanel detail={yesterday} />
            </Tab.Panel>
            <Tab.Panel className={"p-2"}>
              <ExchangeDetailPanel detail={week} />
            </Tab.Panel>
            <Tab.Panel className={"p-2"}>
              <ExchangeDetailPanel detail={month} />
            </Tab.Panel>
          </Tab.Panels>
          <div className={"mx-auto flex items-center justify-center space-x-1"}>
            <FeeToolTip />
            <p>Transaction fee not calculated</p>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
}
