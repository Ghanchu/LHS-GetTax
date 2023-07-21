const data = require("./dao/converted.json");

export const getValue = (address: string): [number, number] => {
  let sum = 0;
  let amount = 0;
  address = address.toUpperCase();
  data.forEach((item: any) => {
    if (address === item["f-address"]) {
      sum +=
        ((Number(item["landprice"]) + Number(item["buildingprice"])) *
          0.0676 *
          Number(item["mill_levy"])) /
        1000;
      amount++;
    }
  });

  return [sum, amount];
};
