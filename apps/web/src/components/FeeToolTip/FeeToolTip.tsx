import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { IconInfoCircle } from "@tabler/icons-react";

import { transactionFee } from "~/data/constants";

export default function FeeToolTip() {
  return (
    <Popover className={"relative"}>
      <Popover.Button className={"flex"}>
        <>
          <IconInfoCircle />
          <span className={"sr-only"}>Transaction Fee {transactionFee * 100}%</span>
        </>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter={"transition ease-out duration-200"}
        enterFrom={"opacity-0 translate-y-1"}
        enterTo={"opacity-100 translate-y-0"}
        leave={"transition ease-in duration-150"}
        leaveFrom={"opacity-100 translate-y-0"}
        leaveTo={"opacity-0 translate-y-1"}
      >
        <Popover.Panel
          className={
            "card-compact card-bordered card bg-base-300 text-base-content absolute left-1/2 z-10 -translate-x-1/2 shadow"
          }
        >
          <div className={"card-body"}>
            <p>
              Transaction Fee <span className={"text-info"}>{transactionFee * 100}%</span>
            </p>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
