export const AllTimeCalculation = ({ startDate, endDate, prices }) => {
    
    const calcInvestAmount = (num) => {
        let changeInPrice = (num * prices[prices.length - 1]) / prices[1];
        return changeInPrice;
    };
  return (
    <>
    <h3>If you would've invested $100 when Bitcoin emerged, you would have ${Math.round(calcInvestAmount(100) * 100) / 100} today!</h3>
    </>

  );
};
