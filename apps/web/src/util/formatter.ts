import Currency from "~/data/ratio";

export function priceToCoin(price: number) {
  const absValue = Math.abs(price);
  const gold = Math.floor(absValue / 100);
  const silver = Math.floor(absValue % 100);
  const copper = Math.floor((absValue - gold * 100 - silver) * 100);

  return {
    gold,
    silver,
    copper,
    negative: price < 0,
  };
}

export function priceToCurrency(price: number, currency: Currency) {
  return new Intl.NumberFormat().format((100 / price) * currency);
}
