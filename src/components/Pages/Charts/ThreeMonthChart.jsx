import { useEffect, useState } from 'react';
import { LineChart } from '../../Shared/LineChart';
import dateRange from '../../Shared/dateRange';
import { StandardCalculation } from '../Calculations/StandardCalculation';

export const ThreeMonthChart = () => {
  const [threeMonthData, setThreeMonthData] = useState([]);
  const [threeMonthPrices, setThreeMonthPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const startDate = dateRange(90).startDate;
  const endDate = dateRange(90).endDate;
  const threeMonthURL = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;

  useEffect(() => {
    const getThreeMonthData = async () => {
      const response = await fetch(threeMonthURL);
      const bitcoinData = await response.json();
      setThreeMonthData(bitcoinData.bpi);
      setThreeMonthPrices(Object.values(bitcoinData.bpi))
    };
    getThreeMonthData();
    setIsLoading(false);
  }, [threeMonthURL]);

  return (
    <div className='crypto-page'>
      {threeMonthData && !isLoading ? <>
        <LineChart data={threeMonthData} /><StandardCalculation time="three months" prices={threeMonthPrices} /></>
        : <div className="loader"></div>} </div>
  );
}
