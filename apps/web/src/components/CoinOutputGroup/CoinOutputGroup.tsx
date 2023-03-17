import { CopperIcon, GoldIcon, SilverIcon } from "~/components/Icon/Icon";
import { priceToCoin } from "~/util/formatter";

type CoinGroupProps = {
  price: number;
  readonly: boolean;
};

export default function CoinOutputGroup({ price, readonly }: CoinGroupProps) {
  const { gold, silver, copper, negative } = priceToCoin(price);

  return (
    <div className={"input-group overflow-x-auto"}>
      {negative && <span>-</span>}
      {gold > 0 && (
        <>
          <input className={"input-bordered input w-24 grow"} readOnly={readonly} value={`${gold}`} />
          <span className={"shrink-0"}>
            <GoldIcon size={16} />
          </span>
        </>
      )}
      {silver > 0 && (
        <>
          <input className={"input-bordered input w-24 grow"} readOnly={readonly} value={silver} />
          <span className={"shrink-0"}>
            <SilverIcon size={16} />
          </span>
        </>
      )}
      {copper > 0 && (
        <>
          <input className={"input-bordered input w-24 grow"} readOnly={readonly} value={copper} />
          <span className={"shrink-0"}>
            <CopperIcon size={16} />
          </span>
        </>
      )}
    </div>
  );
}
