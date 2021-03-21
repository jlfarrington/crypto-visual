export const MonthCalculation = ({ prices }) => {
    
    const calcInvestAmount = (num) => {
        let changeInPrice = (num * prices[prices.length - 1]) / prices[1];
        return changeInPrice;
    };
  return (
    <div className="calc">
    <h3>If you would've invested $100 a month ago, you would have ${Math.round(calcInvestAmount(100) * 100) / 100} today.</h3>
    </div>

  );
};
