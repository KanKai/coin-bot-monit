export const calculateCostProfit = (
  cost = 0,
  buyFee = 0,
  sellFee = 0,
  availCoin = 0,
  coinPrice = 0
) => {
  let calFeeCost = 0;
  let calCost = 0;

  if (cost > 0) {
    calFeeCost = cost * (buyFee / 100);
    calCost = cost - calFeeCost;
  }

  const calPriceSell = availCoin * coinPrice;
  const calFeeSell = calPriceSell - calPriceSell * (sellFee / 100);
  const calCostProfitPercent =
    cost > 0 ? (calFeeSell / calCost) * 100 - 100 : calFeeSell;

  //   console.log('calFeeSell ====>', calFeeSell);
  //   console.log('calCost ====>', calCost);
  //   console.log('costProfit ====>', calFeeSell - calCost);
  //   console.log('calCostProfitPercent ====>', calCostProfitPercent);
  return {
    costProfit: calFeeSell - calCost,
    calCostProfitPercent,
    priceSell: calFeeSell,
    costIncludeFee: calCost,
  };
};
