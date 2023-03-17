import { CopperIcon, GoldIcon, SilverIcon } from "~/components/Icon/Icon";
import { priceToCoin } from "~/util/formatter";

type CoinProps = {
  value: number;
  size?: number;
};

export default function CoinGroup({ value, size = 24 }: CoinProps) {
  const { gold, silver, copper, negative } = priceToCoin(value);

  return (
    <span>
      {negative && <span>-</span>}
      {gold > 0 && (
        <>
          {gold}
          <GoldIcon className={"inline"} size={size} />
        </>
      )}
      {silver > 0 && (
        <>
          {` ${silver}`}
          <SilverIcon className={"inline"} size={size} />
        </>
      )}
      {copper > 0 && (
        <>
          {` ${copper}`}
          <CopperIcon className={"inline"} size={size} />
        </>
      )}
    </span>
  );
}
