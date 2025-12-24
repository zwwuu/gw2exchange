import { bench, describe } from "vitest";

describe("URL Construction", () => {
  const BASE_URL = "https://api.guildwars2.com";
  const VERSION = "v2";

  bench("string concatenation", () => {
    const quantity = 1000000;
    const url = BASE_URL + "/" + VERSION + "/commerce/exchange/gems?quantity=" + quantity;
  });

  bench("template literals", () => {
    const quantity = 1000000;
    const url = `${BASE_URL}/${VERSION}/commerce/exchange/gems?quantity=${quantity}`;
  });

  bench("URL object", () => {
    const quantity = 1000000;
    const url = new URL(`${VERSION}/commerce/exchange/gems`, BASE_URL);
    url.searchParams.set("quantity", String(quantity));
    url.toString();
  });
});

describe("Data Parsing", () => {
  const mockResponse = {
    coins_per_gem: 12345,
    quantity: 1000000,
  };

  bench("object access", () => {
    const coinsPerGem = mockResponse.coins_per_gem;
    const quantity = mockResponse.quantity;
    const total = coinsPerGem * (quantity / 100);
  });

  bench("destructuring", () => {
    const { coins_per_gem, quantity } = mockResponse;
    const total = coins_per_gem * (quantity / 100);
  });
});

describe("Array Operations", () => {
  const ids = Array.from({ length: 1000 }, (_, i) => i);

  bench("map", () => {
    ids.map((id) => id * 2);
  });

  bench("for loop", () => {
    const result = [];
    for (let i = 0; i < ids.length; i++) {
      result.push(ids[i] * 2);
    }
  });

  bench("forEach", () => {
    const result: number[] = [];
    ids.forEach((id) => result.push(id * 2));
  });
});
