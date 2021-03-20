import { useState } from "react";

export const CustomCalculation = ({ startDate, endDate, prices }) => {
  const [investAmount, setInvestAmount] = useState();

  const calcInvestAmount = (amount) => {
    let changeInPrice = (amount * prices[prices.length - 1]) / prices[1];
    return changeInPrice;
  };
  return (
    <div>
        <h3>Calculate your would-be yield from the custom date range above:</h3>
      <label htmlFor="investment-amount">Invest Amount:</label>
      <input
        type="number"
        id="investment-amount"
        placeholder="$"
        onChange={(e) => setInvestAmount(e.target.value)}
      />
      <button onClick={() => calcInvestAmount()}>Calculate</button>

      {(investAmount > 0) ? <h3>${Math.round(calcInvestAmount(investAmount) * 100) / 100}</h3> : null}
    </div>
  );
};
