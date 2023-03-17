import { useEffect, useState } from "react";
import { IconSwitchVertical } from "@tabler/icons-react";

import CoinOutputGroup from "~/components/CoinOutputGroup/CoinOutputGroup";
import FeeToolTip from "~/components/FeeToolTip/FeeToolTip";
import { GemIcon, GoldIcon } from "~/components/Icon/Icon";
import { transactionFee } from "~/data/constants";

type ExchangeConvertorProps = {
  buyPrice: number;
  sellPrice: number;
};

export default function ExchangeCalculator({ buyPrice, sellPrice }: ExchangeConvertorProps) {
  const [isSellingGem, setIsSellingGem] = useState(true);
  const [quantity, setQuantity] = useState("100");
  const [output, setOutput] = useState(0);

  useEffect(() => {
    const quantityAsNumber = Number(quantity);
    if (quantityAsNumber) {
      setOutput(isSellingGem ? (sellPrice / 100) * quantityAsNumber : (10000 * quantityAsNumber) / buyPrice);
    }
  }, [sellPrice, buyPrice, isSellingGem, output, quantity]);

  return (
    <div className={"card-bordered card card-compact shadow"}>
      <div className={"card-body"}>
        <h3 className={"card-title"}>Calculator</h3>
        <form className={"flex flex-col space-y-4"}>
          <div className={"form-control"}>
            <label className={"label"}>
              <span className={"label-text"}>Selling</span>
            </label>
            <div className={"input-group"}>
              <input
                className={"input-bordered input w-full"}
                id={"quantity"}
                min={0}
                name={"quantity"}
                step={1}
                type={"number"}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <span>{isSellingGem ? <GemIcon size={32} /> : <GoldIcon size={32} />}</span>
            </div>
          </div>

          <div className={"self-center"}>
            <button className={"btn-outline btn"} type={"button"} onClick={() => setIsSellingGem(!isSellingGem)}>
              <span className={"sr-only"}>switch to buying {isSellingGem ? "gem" : "gold"}</span>
              <IconSwitchVertical />
            </button>
          </div>

          <div className={"form-control"}>
            <label className={"label"}>
              <span className={"label-text"}>Gives you</span>
            </label>

            {isSellingGem ? (
              <CoinOutputGroup price={output} readonly={true} />
            ) : (
              <div className={"input-group"}>
                <input
                  className={"input-bordered input w-full"}
                  value={new Intl.NumberFormat().format(output)}
                  readOnly
                />
                <span>
                  <GemIcon size={32} />
                </span>
              </div>
            )}
          </div>

          <div className={"form-control"}>
            <label className={"label justify-start"}>
              <span className={"label-text mr-2"}>After transaction fee</span>
              <FeeToolTip />
            </label>

            {isSellingGem ? (
              <CoinOutputGroup price={output - output * transactionFee} readonly={true} />
            ) : (
              <div className={"input-group"}>
                <input
                  className={"input-bordered input w-full"}
                  value={new Intl.NumberFormat().format(output - output * transactionFee)}
                  readOnly
                />
                <span>
                  <GemIcon size={32} />
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
