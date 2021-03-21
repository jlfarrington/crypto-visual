export const StandardCalculation = ({ startDate, endDate, prices }) => {

  const calcInvestAmount = num => {
    let changeInPrice = (num * prices[prices.length - 1]) / prices[1];
    return changeInPrice;
  };
  
  return (
    <div className='calc'>
      <h3>If you would've invested $100 on {startDate}, you would have ${Math.round(calcInvestAmount(100) * 100) / 100} on {endDate}!</h3>
    </div>

  );
};
