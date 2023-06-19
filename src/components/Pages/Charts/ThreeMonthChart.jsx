import { useEffect, useState } from 'react';
import { LineChart } from '../../Shared/LineChart';
import dateRange from '../../Shared/dateRange';
import { StandardCalculation } from '../Calculations/StandardCalculation';
import moment from 'moment';

export const ThreeMonthChart = () => {
  const [threeMonthData, setThreeMonthData] = useState([]);
  const [threeMonthPrices, setThreeMonthPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const today = moment();

    const todayUnix = today.unix()

    const threeMonthsAgo = today.subtract(3, 'months');
    const threeMonthsAgoUnix = threeMonthsAgo.unix();

    const threeMonthURL = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${threeMonthsAgoUnix}&to=${todayUnix}&precision=2`;


  useEffect(() => {
    const getThreeMonthData = async () => {
      const response = await fetch(threeMonthURL);
      const bitcoinData = await response.json();
      setThreeMonthData(bitcoinData.prices);
      setThreeMonthPrices(bitcoinData.prices.map(price => price[1]))
    };
    getThreeMonthData();
    setIsLoading(false);
  }, []);

  return (
    <div className='crypto-page'>
      {threeMonthData && !isLoading ? <>
        <LineChart data={threeMonthData} chartType="3m"/><StandardCalculation time="three months" prices={threeMonthPrices} /></>
        : <div className="loader"></div>} </div>
  );
}
