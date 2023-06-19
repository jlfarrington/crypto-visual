import { useEffect, useState } from 'react';
import { LineChart } from '../../Shared/LineChart';
import { StandardCalculation } from '../Calculations/StandardCalculation';
import moment from 'moment';

export const WeekChart = () => {
  const [weekData, setWeekData] = useState([]);
  const [weekPrices, setWeekPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const today = moment();
  const todayUnix = today.unix()

  const weekAgo = today.subtract(7, 'days');
  const weekAgoUnix = weekAgo.unix();

  const weekURL = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${weekAgoUnix}&to=${todayUnix}&precision=2`;

  useEffect(() => {
      const getWeekData = async () => {
        const response = await fetch(weekURL);
        const bitcoinData = await response.json();
        setWeekData(bitcoinData.prices);
        setWeekPrices(bitcoinData.prices.map(price => price[1]))
      };
      getWeekData();
      setIsLoading(false);
    }, []);

  return (
    <div className='crypto-page'>
      {weekData && !isLoading ? <>
        <LineChart data={weekData} chartType="1w"/><StandardCalculation time='week' prices={weekPrices} /></>
        : <div className="loader"></div>} </div>
  );
};
