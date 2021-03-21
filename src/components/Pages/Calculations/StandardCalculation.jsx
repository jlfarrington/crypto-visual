export const StandardCalculation = ({ time, prices }) => {

  const calcInvestAmount = num => {
    let changeInPrice = (num * prices[prices.length - 1]) / prices[1];
    return changeInPrice;
  };
  
  return (
    <div className='calc'>
      {
        time === "three month's" ?
        <h3 className='calc-text'>If you would've invested $100 {time} ago, you would have ${Math.round(calcInvestAmount(100) * 100) / 100} today.</h3>
        : time === 'all' ?
        <h3 className='calc-text'>If you would've invested $100 when Bitcoin emerged, you would have ${Math.round(calcInvestAmount(100) * 100) / 100} today!</h3>
        :
        <h3 className='calc-text'>If you would've invested $100 a {time} ago, you would have ${Math.round(calcInvestAmount(100) * 100) / 100} today.</h3>
      }
     
    </div>

  );
};
